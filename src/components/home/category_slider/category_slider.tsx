"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import { typeData } from "@/utils/data/type";
import Image from "next/image";
import { useSearchParams,useRouter } from "next/navigation";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import Link from "next/link";
export default function MobileTypeScroll() {

  const searchParams=useSearchParams()
  const channel=searchParams.get("channel")||"HBO"
  const router = useRouter();

  const type=searchParams.get("type")

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    
    if (!searchParams.has('type')) {
      searchParams.set('type', 'Live TV');
      
      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      router.replace(newUrl, undefined, );
    }
  }, [router]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems:'center',
        gap: "1rem",
        bgcolor: "inherit",
        width: "100vw",
        overflowX: "auto",
        whiteSpace: "nowrap",
        marginTop: "0.5rem",
        scrollbarWidth: "none" /* Firefox */,
        "&::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
        scrollBehavior: "smooth",
        paddingX:'1rem',
        
        
      }}
    >
      {typeData.map((items, index) => (

        <Link href={`?${new URLSearchParams({channel,type:items.name,})}`} >

<Box
          key={index}
          sx={{
            width: `${items.name==type?'170px':'160px'}`,
            height: `${items.name==type?'180px':'170px'}`,
            flexShrink: 0,
            bgcolor: "#1a1b39",
            padding: "1rem",
            borderRadius:'15px',
            display:'flex',
            flexDirection:'column',
            gap:'1rem',
            border: `${items.name==type?'2px solid #007bff':''}`, /* Solid blue border */
            boxShadow: `${items.name==type?'0 0 5px #007bff':''}`, /* Inner blue glow */
            

          

          }}
         
          
        >
          <Box
            sx={{
              bgcolor: "#0f102e",
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius:'10px'
            }}
          >
            <Image
              width={200}
              height={200}
              src={`/type/${items.url}`}
              alt="vv"
              style={{ color: "white", width: "100%", height: "50%" }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                
              }}
            >
              <Typography sx={{ fontSize: "1rem" }}>{items.name}</Typography>{" "}
              <Box component="span">New</Box>
            </Box>
            <Typography >
              {items.numberOfContent}
            </Typography>
          </Box>
        </Box>
        </Link>
       
      ))}
    </Box>
  );
}
