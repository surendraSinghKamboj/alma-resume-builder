import { Input } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Personal = () => {
  return (
    <Box varient>
      <Box>
        <Input type="file"></Input>
      </Box>
      <Box>
        <Input type="text" placeholder="First Name"></Input>
        <Input type="text" placeholder="Last Name"></Input>
      </Box>
    </Box>
  );
};

export default Personal;