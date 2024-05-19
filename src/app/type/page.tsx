import React from 'react'
import { Box } from '@mui/material'
import Header from '@/components/type/header/header'
import  {Body} from '@/components/type/body/body'
export default function page() {
  return (
    <Box sx={{width:'100vw',backgroundColor:'#100f2e',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <Header/>
      <Body/>
    </Box>
  )
}
