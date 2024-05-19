import React from 'react'
import { Box } from '@mui/material' 
import Typography from '@mui/material/Typography'
export  function Header() {
  return (
    <Box   sx={{position:'absolute',zIndex:10}}>
    <Typography>Channel</Typography>
    <Box>
     <Typography>Time</Typography>
      <Box><Box>Icon</Box><Typography>Cel</Typography></Box>
      <Box>Pofile</Box>
    </Box>
      
    </Box>
  )
}
