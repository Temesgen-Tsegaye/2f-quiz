import React from 'react'
import { Box } from '@mui/material'
import  {Side} from './side'
import Wrapper from './main/wrapper'
export  function Body() {
  return (
    <Box sx={{color:"white",flex:1,display:'flex',paddingX:'4rem',width:'100vw',
    "@media (max-width: 601px)": {
      height:"80vh",
    },}}>
      <Side/>
      <Wrapper/>
    </Box>
  )
}
