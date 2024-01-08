import React from "react";

import axios from "axios";

import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 20000,
});

export function AxiosProvider({ children }: { children: React.ReactElement }) {
  const auth = getAuth(app);

  // const waitForAuth = new Promise((resolve, reject) => {
  //   auth.onAuthStateChanged((user) => {
  //     resolve(user);
  //   }, reject);
  // });

  const reqestInterceptor = instance.interceptors.request.use(
    async (request) => {
      // await waitForAuth;
      const token = await auth.currentUser?.getIdToken();
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    }
  );
  const responseInterceptor = instance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      return;
    }
  );
  return <>{children}</>;
}
