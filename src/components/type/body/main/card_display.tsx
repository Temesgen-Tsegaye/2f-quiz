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
      }}
    >
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
    </Box>
  )
}
