import { Box, CssBaseline } from "@mui/material";
import { Header } from "../Header";
import { DrawerWrapper } from "@/components/DrawerWrapper";
import { useState } from "react";
import { DefaultLayoutProps } from "./typs";

import { useAuthentication } from "@/hooks/useAuthentication";

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAuthentication("");

  const handleSignOut = async () => {
    await logout();
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
