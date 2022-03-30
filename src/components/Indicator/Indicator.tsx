import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyle } from './indicatorStyle';

type Props = {
  name: string;
  data: string
}

const Indicator: React.FC<Props> = ({
  name,
  data
}) => {
  const { classes } = useStyle();
  return (
    <Box className={classes.indicator}>
      <Typography component={'h3'}>{name}</Typography>
      <Typography component={'p'}>{data}</Typography>
    </Box>
  );
};

export default Indicator;
