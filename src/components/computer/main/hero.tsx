import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import TypeSlider from "../type_slider";
export function Hero() {
  return (
    <Box
      sx={{
        height: "75vh",
        bgcolor: "green",
        position:'relative'
      
       
       
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bgcolor: "black",
          background:
            "radial-gradient(ellipse at center center, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0) 20%, rgba(0,0,0,1) 100%)",
        }}
      ></Box>
      <Image
        src="/fox.jpg"
        alt="fox.jpg"
        sizes="100vw"
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    <TypeSlider/>
    </Box>
  );
}
