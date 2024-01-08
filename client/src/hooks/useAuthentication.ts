import { app } from "@/lib/firebase";

import { firebaseUserAtom } from "@/atoms/firebaseUserAtom";
import { userAtom } from "@/atoms/userAtom";
import { instance } from "@/components/AxiosProvider";
import {
  ServiceUserResponseType,
  UserSignupFormType,
  UserSignupParamsType,
} from "../../src/types/user";

import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useRecoilState } from "recoil";
import { AxiosResponse } from "axios";

export const useAuthentication = (role: "buyer" | "agent" | "") => {
  const [serviceUser, setServiceUser] = useRecoilState(userAtom);
  const [firebaseUser, setFirebaseUser] = useRecoilState(firebaseUserAtom);
  const auth = getAuth(app);

  const login = async (email: string, password: string) => {
    try {
      const firebaseRes = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setFirebaseUser(firebaseRes.user || null);
      const serviceRes: AxiosResponse<ServiceUserResponseType> =
        await instance.get(`/sign-in/${role}`);
      if (serviceRes.data) {
        setServiceUser(serviceRes.data);
      }
      return true;
    } catch (error) {
      alert("ログインに失敗しました");
      return false;
    }
  };

  const signupFirebase = async (email: string, password: string) => {
    try {
      const firebaseRes = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setFirebaseUser(firebaseRes.user || null);
      return true;
    } catch (error) {
      alert("登録に失敗しました");
      return false;
    }
  };

  const signupService = async (form: UserSignupFormType) => {
    try {
      const params: UserSignupParamsType = {
        email: firebaseUser?.email || "",
        ...form,
      };
      const res: AxiosResponse<ServiceUserResponseType> = await instance.post(
        `/sign-up/${role}`,
        params
      );
      if (!res) {
        // サービスへの登録が失敗したらFirebaseのアカウントも削除
        firebaseUser && (await deleteUser(firebaseUser));
      }
      setServiceUser(res.data);

      return true;
    } catch (error) {
      alert("登録に失敗しました");
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setFirebaseUser(null);
      setServiceUser(null);
      return true;
    } catch (error) {
      alert("ログアウトに失敗しました");
      return false;
    }
  };

  return { login, signupFirebase, signupService, logout };
};
