import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="div" sx={{ p: 2, height:"5vh", borderRadius: 2, border: '1px dashed #00b894', bgColor:"primary" }} >
        <Typography fontWeight="1rem"  color="textSecondary" align="left" variant="h4">
            @Footer
        </Typography>
    </Box>
    
  )
}

export default Footer