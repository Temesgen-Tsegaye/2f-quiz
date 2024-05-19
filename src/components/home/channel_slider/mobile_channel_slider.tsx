"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { data } from "@/utils/data/channel_image";
import Image from "next/image";
import Link from "next/link";
export default function MobileChannelScroll() {
  
  const [selectedId, setSelectdId] = React.useState("");
  return (
    <Box
      sx={{

        height: "10vh",
        display: "flex",
        gap: "1rem",
        bgcolor: "inherit",
        width: "100vw",
        overflowX: "auto",
        whiteSpace: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        paddingX: "2rem",
        scrollbarWidth: "none" /* Firefox */,
        "&::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
        scrollBehavior: "smooth",
        // boxShadow: 'inset 10px 0 10px -5px rgba(16, 15, 46, 0.5), inset -10px 0 10px -5px rgba(16, 15, 46, 0.5)'
      }}
    >
     

      {data.map((items, index) => (

         <Image
          width={50}
          height={50}
          src={`${items.url}`}
          alt="Ch"
          style={{
            width: `${items.name == selectedId ? "4rem" : "3rem"}`,
            height: `${items.name == selectedId ? "4rem" : "3rem"}`,
            borderRadius: "50%",
            borderColor: `${items.name == selectedId ? "rgba(99,102,241,0.5)" : ""}`,
            borderWidth: `${items.name == selectedId ? "3px" : ""}`,
            color: "white",
            padding: "0.5rem",
            background: "rgb(30 27 75)",
            opacity: 0.8,
            transition: "transform 0.2s ease-in-out",
            
          }}
          className="active:scale-[1.2] w-16 h-16"
          onClick={() => {
            setSelectdId(items.name);
          }}
        />
       
      ))}
    </Box>
  );
}
