import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Contact = () => {
  return (
    <Box>
      <TextField label="Your Email" variant="outlined"/>
      <Button variant='contained'>Contact Us!</Button>
    </Box>
  )
}

export default Contact
