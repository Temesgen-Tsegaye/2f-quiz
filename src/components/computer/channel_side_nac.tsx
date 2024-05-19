import * as React from 'react';
import Box from '@mui/material/Box';

export  function ChannelScroll() {
  return (
    <Box 
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        gap: '1rem',
        bgcolor: 'inherit',
        overflowY: 'auto',
        whiteSpace: 'nowrap',
      
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
            width: '4rem',
            height: '100%',
            bgcolor: index % 2 === 0 ? 'red' : 'green',
            flexShrink: 0
          }}
        />
      ))}
    </Box>
  );
}
