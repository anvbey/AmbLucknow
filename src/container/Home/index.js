import { Box } from '@mui/material'
import React from 'react'
import Contact from '../../components/Home/Contact'
import Hero from '../../components/Home/Hero'
import Photograph from '../../components/Home/Photograph'
import Partition from '../../components/Partition/Partition'

const Home = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center'
    }}>
      <Hero />
      <Partition/>
      <Contact/>
      <Partition/>
      <Photograph/>
    </Box>
  )
}

export default Home
