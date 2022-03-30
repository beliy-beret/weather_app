import axios from 'axios';
import { ResponseData } from '../appTypes';

const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=ee2b9624ebabf8d51b6f9806756e5b8f';

type Response = {
  data: ResponseData
}

export const getData = (cityName: string, unit: string): Promise<Response> => (
  axios.get(`${URL}&q=${cityName}&units=${unit}&lang=ru`)
);
