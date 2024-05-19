import React from 'react'
import { Box } from '@mui/material'
import { Hero } from './hero'
import { Header } from './header'
export function Main() {

  return (
    <Box sx={{width:'70vw'}}>
        <Header/>
      <Hero/>
    </Box>
  )
}
