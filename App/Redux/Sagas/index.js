import {takeLatest} from 'redux-saga/effects';
import API from '../Services/Api';
import {WeatherTypes} from '../Redux/WeatherRedux';

import {getAllWeather} from './WeatherSagas';

const api = API.create();

export default function* root() {
  yield [takeLatest(WeatherTypes.GET_WEATHER_REQUEST, getAllWeather, api)];
}
