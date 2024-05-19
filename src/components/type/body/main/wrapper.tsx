import React from 'react'
import { Box } from '@mui/material'
import Tabs from './tabs'
import CardDisplay from './card_display'
export default function Wrapper() {
  return (
    <Box sx={{width:'80vw',display:'flex',flexDirection:'column',gap:'2rem'}}>

        <Tabs/>
        <CardDisplay/>

      
    </Box>
  )
}
