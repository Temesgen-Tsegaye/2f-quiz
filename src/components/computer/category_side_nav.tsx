import React from "react";
import { Box } from "@mui/material";
export  function CategoryNav() {
  return (
    <Box sx={{ display: "flex", paddingY: "2rem",height:'100vh' }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>Logo</Box>

        <Box>
          <Box>Icon</Box>
          <Box>Icon</Box>
          <Box>Icon</Box>
        </Box>
      </Box>
    </Box>
  );
}
