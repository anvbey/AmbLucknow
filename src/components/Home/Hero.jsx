import { Box, Typography } from '@mui/material'
// import image1

const Hero = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            // background: 'pink',
            justifyContent: 'space-between',
        }}>
            {/* Description */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                // background: 'yellow',
                justifyContent: 'center',
                alignItems: 'center',
                flex: '65%',
            }}>
                <Typography sx={{
                    fontSize: { xs: '30px', sm: '40px', md: '50px', lg: '60px', xl: '100px' },
                    color: '#2CA6DB',
                }}>Avatar Meher Baba</Typography>
                <Typography fontSize={'40px'}>Things that are Real are given and received in Silence.</Typography>
            </Box>
            {/* Photogragh */}
            <Box sx={{
                // background: 'green',
                marginRight: '10px',
                flex: '35%'
            }}>
                <img alt="img" src={'/assets/image.png'} width="550" height="650" />
            </Box>
        </Box >
    );
}


export default Hero;