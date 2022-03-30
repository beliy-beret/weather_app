import React from 'react';
import { Box, Typography } from '@mui/material';

const Preloader: React.FC = () => (
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    paddingTop: '25%',
    backgroundColor: 'rgba(152,109,197,0.4)'
  }}>
    <Typography
      component={'h2'}
      variant={'h2'}
      align={'center'}
    >Loading ...</Typography>
  </Box>
);

export default Preloader;
