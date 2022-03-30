type Coord = {
  lon: number,
  lat: number
}
type WeatherData = {
  id: number,
  main: string,
  description: string,
  icon: string
}
type Weather = Array<WeatherData>
type Main = {
  temp: number,
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}
type Wind = {
  speed: number
  deg: number
  gust: number
}
type Sis = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface ResponseData {
  coord: Coord;
  weather: Weather;
  base: string;
  main: Main;
  visibility: string;
  wind: Wind;
  clouds: { all: number };
  dt: number;
  sys: Sis;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

