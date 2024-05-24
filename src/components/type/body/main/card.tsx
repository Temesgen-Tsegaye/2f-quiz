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
    zIndex:1,
    "@media (max-width: 601px)": {
      width: "100%",
    }
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
          filter: 'grayscale(40%)',
        '&:hover': {
          filter: 'none',
        },
          zIndex:-10
        }}
      ></Box>
      <Box sx={{textAlign:'end',fontSize:"1rem",fontWeight:600,color:'white'}}>hey</Box>

      <Box sx={{display:'flex',flexDirection:'column',gap:"1rem"}}>
        <Box sx={{ color: "white",bgcolor:"#e3bb0b",padding:"0.25rem",width:"4rem",borderRadius:"5px",textAlign:'center',fontSize:"0.8rem" }}>New</Box>
  <Box sx={{fontWeight:700,color:'white'}}>Name</Box>
        <Box sx={{ display: "flex",gap:"0.5rem",color:'white' }}>
          <FaCirclePlay  size={25}/> <IoMdTime size={25}/> <FaHeart size={25} />
        </Box>
      </Box>
    </Paper>
  );
}
