import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Styles/HomeScreenStyle';
import WeatherRow from '../Components/WeatherRow';
import WeatherActions from '../Redux/WeatherRedux';
import {Images} from '../Themes';
import {selectWeatherList} from '../Redux/Selectors';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {name, temp, icon} = useSelector(selectWeatherList);

  const [info, setInfo] = useState({
    name: name,
    temp: temp,
    icon: icon,
  });

  useEffect(() => {
    dispatch(WeatherActions.getWeatherRequest());
  }, [dispatch, setInfo]);

  return (
    <View style={styles.container}>
      <View style={styles.statusbar}>
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.statusBarTitle}>Weather Project</Text>
      </View>
      <WeatherRow info={info} />
    </View>
  );
};

export default HomeScreen;
