import React from 'react'
import { Box } from '@mui/material'
import  {Side} from './side'
import Wrapper from './main/wrapper'
export  function Body() {
  return (
    <Box sx={{bgcolor:'red',flex:1,display:'flex',paddingX:'4rem',width:'100vw'}}>
      <Side/>
      <Wrapper/>
    </Box>
  )
}
