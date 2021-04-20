import apisauce from 'apisauce';

const create = (
  baseURL = 'https://api.openweathermap.org/data/2.5/weather?',
) => {
  const api = apisauce.create({
    baseURL,
    timeout: 15000,
  });

  const getWeather = MyCity =>
    api.get(`/weather?q=${MyCity}&APPID=343f6f43dfgg979439003b0&units=metric`);

  return {
    getWeather,
  };
};

export default {
  create,
};
