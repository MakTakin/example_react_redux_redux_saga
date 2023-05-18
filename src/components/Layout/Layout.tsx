import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "../Box";

export const Layout: FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};
