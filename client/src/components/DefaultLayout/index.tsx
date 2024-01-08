import { useState } from "react";
import { useRouter } from "next/router";

import { Box, CssBaseline } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";

import { Header } from "../Header";
import { DrawerWrapper } from "@/components/DrawerWrapper";
import { DefaultLayoutProps } from "./typs";
import { useAuthentication } from "@/hooks/useAuthentication";

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAuthentication("agent");

  const router = useRouter();

  const handleSignOut = async () => {
    const auth = getAuth();
    router.push("/");
    const isLoggedOut = await logout(auth);
    // if (isLoggedOut) {

    // }
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header onClickMenu={() => setIsOpen(true)} />
      <DrawerWrapper
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleSignOut={handleSignOut}
      />
      <CssBaseline />
      <Box flexGrow={1}>{children}</Box>
    </Box>
  );
};
