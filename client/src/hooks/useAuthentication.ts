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
  Auth,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useRecoilState } from "recoil";
import { AxiosResponse } from "axios";

export const useAuthentication = (role: "buyer" | "agent") => {
  const auth = getAuth(app);

  const login = async (email: string, password: string) => {
    try {
      const firebaseRes = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const serviceRes: AxiosResponse<ServiceUserResponseType> =
        await instance.get(`/sign-in/${role}`);
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
      return true;
    } catch (error) {
      alert("登録に失敗しました");
      return false;
    }
  };

  const signupService = async (form: UserSignupFormType) => {
    try {
      const res: AxiosResponse<ServiceUserResponseType> = await instance.post(
        `/sign-up/${role}`
      );
      return true;
    } catch (error) {
      alert("登録に失敗しました");
      return false;
    }
  };

  const logout = async (auth: Auth) => {
    try {
      signOut(auth);
      return true;
    } catch (error) {
      alert("ログアウトに失敗しました");
      return false;
    }
  };

  return { login, signupFirebase, signupService, logout };
};
