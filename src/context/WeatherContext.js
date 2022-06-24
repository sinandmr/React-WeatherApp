import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
const WeatherContext = createContext();
const API_KEY = '8106c4849a2b8d3479f6755f55e9f718';

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState({
    name: '',
    lat: '',
    lon: '',
  });

  const [cityData, setCityData] = useState({
    currentDay: {},
    otherDay: {},
  });

  useEffect(() => {
    if (!city.name) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}`
      )
      .then(data =>
        setCity(c => ({
          ...c,
          lat: data.data.coord.lat,
          lon: data.data.coord.lon,
        }))
      )
      .catch(err => {
        console.error(err);
      });
  }, [city.name]);

  useEffect(() => {
    if (!city.lat || !city.lon) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=minutely,hourly&appid=${API_KEY}`
      )
      .then(data => setCityData(data.data.daily));
  }, [city.lat, city.lon]);

  const values = {
    city,
    setCity,
    cityData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
