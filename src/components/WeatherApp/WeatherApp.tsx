import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/_store';
import { getWeatherDataTC, setUnitAC } from '../../redux/reducers/weatherReducer';
import { Box, Button, Container, Typography } from '@mui/material';
import { useStyle } from './appStyle';
import MainInfo from '../MainInfo/MainInfo';
import Indicator from '../Indicator/Indicator';
import Units from '../Units/Units';
import SearchBlock from '../SearchBlock/SearchBlock';

const WeatherApp: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    cityName,
    unit,
    weather
  } = useAppSelector((state: RootState) => state);

  const [editMode, setEditMode] = useState(false);
  const { classes } = useStyle();

  function editModeHandle() {
    setEditMode(!editMode);
  }

  function toggleUnit(e: ChangeEvent<HTMLInputElement>) {
    dispatch(getWeatherDataTC(cityName, e.target.value));
    dispatch(setUnitAC(e.target.value));
  }

  function changeCityName(searchValue: string) {
    editModeHandle();
    dispatch(getWeatherDataTC(searchValue, unit));
  }

  return (
    <Container
      maxWidth={'lg'}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Box className={classes.cityBox}>
        {editMode ?
          <SearchBlock
            changeCityName={changeCityName}
            editModeHandle={editModeHandle}
          />
          :
          <React.Fragment>
            <Typography
              className={classes.cityName}
              component={'h2'}
              variant={'h5'}
            >
              {cityName}
            </Typography>
            <Button
              className={classes.changeCityButton}
              variant={'text'}
              onClick={editModeHandle}
            >
              Сменить город
            </Button>
          </React.Fragment>
        }
        <Box className={classes.unitWrapper}>
          <Units toggleUnit={toggleUnit}/>
        </Box>
      </Box>
      <MainInfo temp={weather.temp} description={weather.description}
                main={weather.main}/>
      <Box className={classes.indicators}>
        <Indicator name=" Ветер:" data={weather.windSpeed}/>
        <Indicator name=" Давление:" data={weather.pressure}/>
        <Indicator name=" Влажность:" data={weather.humidity}/>
        <Indicator name=" Вероятность дождя:" data={weather.clouds}/>
      </Box>

    </Container>
  );
};

export default WeatherApp;
