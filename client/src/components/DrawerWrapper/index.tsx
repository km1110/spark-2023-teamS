import Link from "next/link";

import { Box, Button, Drawer, Typography } from "@mui/material";

import { DrawerWrapperProps } from "./types";

export const DrawerWrapper = ({
  isOpen,
  onClose,
  handleSignOut,
}: DrawerWrapperProps) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "black",
          }}
          sx={{
            width: "261px",
            borderRadius: "4px",
            marginX: "10px",
            marginTop: "10px",
            fontSize: "24px",
          }}
          onClick={handleSignOut}
        >
          ログアウト
        </Button>
        <Typography
          variant="h6"
          noWrap
          sx={{ fontSize: "16px", marginTop: "10px" }}
        >
          <Link href={"/agent/signup"}>代理人として登録する</Link>
        </Typography>
      </Box>
    </Drawer>
  );
};
