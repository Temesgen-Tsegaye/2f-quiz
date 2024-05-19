"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import {data} from "@/utils/data/channel_image" 
import Image from 'next/image';
export default function MobileChannelScroll() {
  return (
    <Box 
      sx={{
        height: '10vh',
        display: 'flex',
        gap: '1rem',
        bgcolor: 'inherit',
        width: '100vw',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      
        scrollbarWidth: 'none', /* Firefox */
        '&::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
        scrollBehavior: 'smooth'
      }}
    >
      {data.map((itmes, index) => (
          
         <Image width={50} height={50}  src={`${itmes}`}  alt='Ch'

          style={{width:'3rem',height:'3rem',borderRadius:'50%', padding:'0.5rem',color:'white',background:'rgb(23 37 84)',opacity:0.8,
        
            
          }}
         />
      ))}
    </Box>
  );
}
