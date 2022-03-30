import React from 'react';
import partly_cloudy from '../../images/partly_cloudy.svg';
import rain from '../../images/rain.svg';
import storm from '../../images/storm.svg';
import sun from '../../images/sun.svg';
import snow from '../../images/snowflake.svg';
import { useStyle } from './mainInfoStyle';
import { Box, Typography } from '@mui/material';

type Props = {
  main: string;
  temp: number;
  description: string;
};

const MainInfo: React.FC<Props> = ({
  main,
  temp,
  description
}) => {

  const convertMain = () => {
    switch (main) {
      case 'Snow':
        return snow;
      case 'Rain':
        return rain;
      case 'Clear':
        return sun;
      case 'Thunderstorm':
        return storm;
      case 'Clouds':
        return partly_cloudy;
      default:
        break;
    }
  };
  const imgSrc = convertMain();
  const { classes } = useStyle();
  return (
    <Box className={classes.tempInfo}>
      <img alt="weather" src={imgSrc} className={classes.icon}/>
      <Box className={classes.value}>
        <p> {temp > 0 ? `+${temp}` : temp} <sup>o</sup></p>
      </Box>
      <Typography
        className={classes.description}
        component={'p'}
        variant={'body1'}
        align={'center'}
      > {description}
      </Typography>
    </Box>
  );
};

export default MainInfo;
