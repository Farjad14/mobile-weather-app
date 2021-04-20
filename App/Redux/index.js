import {combineReducers} from 'redux';
import configureStore from './CreateStore';
import rootSaga from './Sagas/';
import {weatherReducer} from './WeatherReducer';

export default () => {
  const rootReducer = combineReducers({
    weather: weatherReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
