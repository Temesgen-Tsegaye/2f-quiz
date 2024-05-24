import React from 'react'
import { Box } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import CloudIcon from "@mui/icons-material/Cloud";
import { TimeCounter } from '../../home/header/timer';
import Image from 'next/image';
export  function RightSide() {
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'40%'}}>
    
    <Box   sx={{
          "@media (max-width: 601px)": {
            display: "none",
          },}} >
    <CloudIcon/>
    <Box component="span">22&deg;C</Box>
   </Box>
   

   <Box component="span"  sx={{
          "@media (max-width: 601px)": {
            display: "none",
          },}}>

   <TimeCounter  
  type={true} 
  
/>

   </Box>


   
   <SearchIcon  sx={{width:'3rem',height:'3rem', padding:'0.8rem' ,borderRadius:'50%',bgcolor:'#08071a',opacity:0.5}} />
    <Image width={50} height={50} src={`/jsdjsd`} alt='img' style={{borderRadius:'50%',backgroundColor:'red'}} />
      
    </Box>
  )
}
