import React from 'react';
import { getWeatherDataTC, setCityNameAC, setErrorAC } from './redux/reducers/weatherReducer';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { RootState } from './redux/_store';
import { Alert, Modal } from '@mui/material';
import InitCity from './components/InitCity/InitCity';
import WeatherApp from './components/WeatherApp/WeatherApp';
import Preloader from './components/Preloader';
import './index.css';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    unit,
    initApp,
    isLoading,
    error,
  } = useAppSelector((state: RootState) => state);

  function getInitData(initValue: string) {
    dispatch(setCityNameAC(initValue));
    dispatch(getWeatherDataTC(initValue, unit));
  }

  function closeAlert() {
    dispatch(setErrorAC(''));
  }

  return (
    <React.Fragment>
      {error &&
      <Alert
        severity={'error'}
        variant={'filled'}
        onClose={closeAlert}
        sx={{
          width: '30%',
          minWidth: '250px',
          margin: '10px auto',
        }}
      >
        {error}
      </Alert>}
      {!initApp ? <InitCity getInitData={getInitData}/> : <WeatherApp/>}
      <Modal open={isLoading}>
        <Preloader/>
      </Modal>
    </React.Fragment>
  );
};

export default App;
