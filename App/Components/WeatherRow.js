import React from 'react';
import {View, Text, ImageBackground, Title, Card} from 'react-native';
import styles from './Styles/WeatherRowStyle';

const WeatherRow = info => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://openweathermap.org/img/w/' + info.icon + '.png',
        }}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{info.name}</Text>
        </View>
      </ImageBackground>
      <Card>
        <Title>Temperature: {info.temp}</Title>
      </Card>
    </View>
  );
};

export default WeatherRow;
