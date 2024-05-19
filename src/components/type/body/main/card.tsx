import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { FaCirclePlay, FaRegCirclePlay } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
export function MovieCard() {
  return (
    <Paper sx={{ display: "flex",
     flexDirection: "column",
     justifyContent: "space-between",
     padding: "1rem",
     position:'relative',
     height: "50vh",
     width:'20vw',
     flexShrink:0,
    zIndex:1
    }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/8/8b/Red_Fox_%28Vulpes_vulpes%29_%284%29.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter:'blur(1px)',
          zIndex:-10
        }}
      ></Box>
      <Box>hey</Box>

      <Box>
        <Box sx={{ color: "white" }}>New</Box>
        <Typography></Typography>

        <Box sx={{ display: "flex" }}>
          <FaCirclePlay /> <IoMdTime /> <FaHeart />
        </Box>
      </Box>
    </Paper>
  );
}
