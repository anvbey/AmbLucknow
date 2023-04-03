import { Box, Typography, TextField, Button} from '@mui/material'
import React from 'react'

const Feedback = () => {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography variant="h2">Feedback</Typography>
      <Box sx={{
        width:'100%',
        margin: '50px 50px 50px 50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
      </Box>
      <Box sx={{
        width:'100%',
        display: 'flex',
        margin: '50px 0 50px 0',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}>
        <TextField id="standard-basic" label="Phone Number" variant="standard" />
        <TextField id="standard-basic" label="City" variant="standard" />
      </Box>
      <Box sx={{
        width:'50%',
        display: 'flex',
        margin: '50px 50px 50px 50px',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}>
        <TextField id="standard-basic" label="Query" variant="standard"
        fullWidth />
      </Box>

      <Box sx={{
        width:'50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}>
        
        <Button variant="contained" style={{borderRadius: 15 ,minWidth: '100px', }}>Submit</Button>
        
        <Button variant="contained" color="error" style={{borderRadius: 15, minWidth: '100px',}}>Reset</Button>
      </Box>
    </Box>
  )
}

export default Feedback
