import { Box, CssBaseline } from "@mui/material";
import { Header } from "../Header";
import { DrawerWrapper } from "@/components/DrawerWrapper";
import { useState } from "react";
import { DefaultLayoutProps } from "./typs";
import { getAuth, signOut } from "firebase/auth";

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsOpen(false);
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
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
