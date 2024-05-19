import React from 'react';
import { Box } from '@mui/material';

export default function TypeSlider() {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: '2rem',
        position: 'absolute',
        bottom: '-7.5vw',
        width:'70vw',
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
      {Array.from({ length: 21 }).map((_, index) => (
        <Box key={index} sx={{ width: '15vw', height: '18vw', bgcolor: 'yellow', flexShrink: 0 }}>
          Box
        </Box>
      ))}
    </Box>
  );
}
