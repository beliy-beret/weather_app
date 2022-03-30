import { getData } from '../../API/API';
import { ResponseData } from '../../appTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../_store';

const SET_UNIT = 'SET_UNIT';
const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_INIT_APP = 'TOGGLE_INIT_APP';
const SET_CITY_NAME = 'CHANGE_CITY_NAME';
const SET_ERROR = 'SET_ERROR';

type InitState = {
  isLoading: boolean
  initApp: boolean
  unit: string
  cityName: string
  weather: Weather
  error: string
}
type Weather = {
  temp: number
  main: string
  description: string
  windSpeed: string
  pressure: string
  humidity: string
  clouds: string
}
type ActionTypes =
  SetWeatherDataActionType
  | SetUnitActionType
  | ToggleInitAppActionType
  | TogglePreloaderActionType
  | SetCityNameActionType
  | SetErrorActionType

const initState: InitState = {
  isLoading: false,
  initApp: false,
  unit: 'metric',
  cityName: '',
  weather: {
    temp: 0,
    clouds: '',
    description: '',
    main: '',
    humidity: '',
    pressure: '',
    windSpeed: ''
  },
  error: '',
};

export const weatherReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return ({
        ...state,
        weather: {
          temp: Math.round(action.payload.main.temp),
          main: action.payload.weather[0].main,
          description: action.payload.weather[0].description,
          windSpeed: `${Math.round(action.payload.wind.speed)} ${state.unit === 'metric' ? 'м/с' : 'миль/ч'}`,
          pressure: `${action.payload.main.pressure} мм.рт.ст`,
          humidity: `${action.payload.main.humidity} %`,
          clouds: `${action.payload.clouds.all} %`,
        }
      });
    case SET_UNIT:
      return ({
        ...state,
        unit: action.payload
      });
    case TOGGLE_PRELOADER:
      return ({
        ...state,
        isLoading: !state.isLoading
      });
    case TOGGLE_INIT_APP:
      return ({
        ...state,
        initApp: action.payload,
      });
    case SET_CITY_NAME:
      return ({
        ...state,
        cityName: action.payload,
      });
    case SET_ERROR:
      return ({
        ...state,
        error: action.payload
      });
    default:
      return state;
  }
};

type SetWeatherDataActionType = {
  type: typeof SET_WEATHER_DATA
  payload: ResponseData
};
export const setWeatherDataAC = (data: ResponseData): SetWeatherDataActionType => ({
  type: SET_WEATHER_DATA,
  payload: { ...data }
});

type SetUnitActionType = {
  type: typeof SET_UNIT
  payload: string
}
export const setUnitAC = (value: string): SetUnitActionType => ({
  type: SET_UNIT,
  payload: value
});

type ToggleInitAppActionType = {
  type: typeof TOGGLE_INIT_APP
  payload: boolean
}
export const toggleInitAppAC = (value: boolean): ToggleInitAppActionType => ({
  type: TOGGLE_INIT_APP,
  payload: value
});

type TogglePreloaderActionType = {
  type: typeof TOGGLE_PRELOADER
}
export const togglePreloaderAC = (): TogglePreloaderActionType => ({ type: TOGGLE_PRELOADER });

type SetCityNameActionType = {
  type: typeof SET_CITY_NAME
  payload: string
}
export const setCityNameAC = (value: string): SetCityNameActionType => ({
  type: SET_CITY_NAME,
  payload: value
});

type SetErrorActionType = {
  type: typeof SET_ERROR
  payload: string
}
export const setErrorAC = (value: string): SetErrorActionType => ({
  type: SET_ERROR,
  payload: value
});

export const getWeatherDataTC =
  (cityName: string, unit: string): ThunkAction<void, RootState, unknown, ActionTypes> => (dispatch) => {
    dispatch(togglePreloaderAC());
    getData(cityName, unit)
      .then(resp => {
        dispatch(setWeatherDataAC(resp.data));
        dispatch(setCityNameAC(resp.data.name));
        dispatch(setErrorAC(''));
        dispatch(toggleInitAppAC(true));
        dispatch(togglePreloaderAC());
      })
      .catch(() => {
        dispatch(setErrorAC('Город не найден !'));
        dispatch(togglePreloaderAC());
      });
  };
