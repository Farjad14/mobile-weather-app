import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  getWeatherRequest: null,
  getWeatherSuccess: ['respuest'],
  getWeatherFailure: ['error'],
});

export const WeatherTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  weather: [],
  status: '',
  fetching: true,
  errorMessage: '',
  error: false,
});

export const getWeatherRequest = (state, action) => {
  return state.merge({fetching: true, error: false, errorMessage: ''});
};

export const getWeatherSuccess = (state, action) => {
  return state.merge({
    fetching: false,
    error: false,
    errorMessage: '',
    weather: action.respuesta,
  });
};

export const getWeatherFailure = (state, action) => {
  return state.merge({
    fetching: false,
    error: true,
    errorMessage: action.error,
  });
};

export const weatherReducer = createReducer(INITIAL_STATE, {
  [Types.GET_WEATHER_REQUEST]: getWeatherRequest,
  [Types.GET_WEATHER_SUCCESS]: getWeatherSuccess,
  [Types.GET_WEATHER_FAILURE]: getWeatherFailure,
});
