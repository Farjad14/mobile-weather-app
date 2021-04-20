import {call, put} from 'redux-saga/effects';
import WeatherActions from '../WeatherRedux';

export function* getAllWeather(api, action) {
  try {
    const response = yield call(api.getWeather);
    console.log('response', response);
    if (response.ok) {
      yield put(WeatherActions.getWeatherSuccess(response.data));
    } else {
      yield put(WeatherActions.getWeatherFailure('Connection problems :('));
    }
  } catch (error) {
    yield put(WeatherActions.getWeatherFailure(error.message));
  }
}
