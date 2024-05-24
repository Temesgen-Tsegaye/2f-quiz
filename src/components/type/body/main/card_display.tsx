import React from 'react'
import { Box } from '@mui/material'
import {MovieCard}  from './card'
export default function CardDisplay() {
  return (
    <Box 
    sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: '2rem',
    
        width:'100%',
         
        whiteSpace: 'nowrap',
        scrollBehavior: 'smooth',
        // Hide scrollbars
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // Safari and Chrome
        },
        "@media (max-width: 601px)": {
         flexDirection:"column",
         overflowY: 'auto',
         whiteSpace: 'nowrap',
         scrollBehavior: 'smooth',
         height:"75vh"

        }
      }}
    >
        {[1,2,3,4,5,6,7,8].map(()=> <MovieCard/>)}
       
    </Box>
  )
}
