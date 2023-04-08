import { Box, Typography } from '@mui/material'
import React from 'react'

const Updates = () => {
  return (
    <Box sx={{
        width: '100%',
        height: '570px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Typography variant='h2' sx={{
        width: '800px',
        color: 'rgb(50 152 211)'
      }}>No updates yet! Stay Tuned.</Typography>
    </Box>
  )
}

export default Updates

