"use client"
import React from 'react'
import { Box, Typography } from '@mui/material'
import { IoIosArrowBack } from "react-icons/io";
import { useSearchParams } from 'next/navigation';
export  function HeaderClient() {

          const searchParams=useSearchParams()
  return (
    <Box sx={{display:'flex',alignItems:'center'}}>
      <IoIosArrowBack style={{padding:'0.8rem',borderRadius:'50%',backgroundColor:'#08071a',width:'3rem',height:'3rem'}}/>
      <Typography>{searchParams.get("type")}</Typography>
    </Box>
  )
}
