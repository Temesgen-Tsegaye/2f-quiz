"use client"
import React from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import  {typeData}  from '@/utils/data/type'
import Image from 'next/image';
import { Typography } from "@mui/material";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Link from 'next/link';

export default function TypeSlider() {
       
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
        display: 'flex',
        overflowX: 'auto',
        gap: '2rem',
        position: 'absolute',
        bottom: '-7.5vw',
        width:'100%',
        left:0,
        whiteSpace: 'nowrap',
        scrollBehavior: 'smooth',
        // Hide scrollbars
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // Safari and Chrome
        },
      }}
    >
      {/* {Array.from({ length: 21 }).map((_, index) => (
        <Box key={index} sx={{ width: '15vw', height: '18vw', bgcolor: 'yellow', flexShrink: 0 }}>
          Box
        </Box>
      ))} */}
        {typeData.map((items, index) => (

          <Link href={`?${new URLSearchParams({channel,type:items.name,})}`}>
          
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
