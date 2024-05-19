import * as React from 'react';
import Box from '@mui/material/Box';

export default function MobileTypeScroll() {
  return (
    <Box 
      sx={{
        height: '17vh',
        display: 'flex',
        gap: '1rem',
        bgcolor: 'inherit',
        width: '100vw',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
    
        marginTop:'3rem',
        scrollbarWidth: 'none', /* Firefox */
        '&::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
        scrollBehavior: 'smooth'
      }}
    >
      {Array(17).fill().map((_, index) => (
        <Box
          key={index}
          sx={{
            width: '15vh',
            height: '100%',
            bgcolor: index % 2 === 0 ? 'red' : 'green',
            flexShrink: 0
          }}
        />
      ))}
    </Box>
  );
}
