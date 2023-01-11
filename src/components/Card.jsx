import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.icon}
          source={{
            uri: `http://openweathermap.org/img/wn/${props.img}@4x.png`,
          }}
        />
      </View>
      <View>
        <Text>{props.name}</Text>
        <Text>Clouds: {props.clouds}</Text>
        <Text>Lat-Long: {props.latitude} - {props.logitude}</Text>
        <Text>Temperature Current: {props.temp}</Text>
        <Text>Temperature Max: {props.max}</Text>
        <Text>Temperature Min: {props.min}</Text>
        <Text>Weather: {props.weather}</Text>
        <Text>Wind: {props.wind}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
  },
  icon: {
    width: 150,
    height: 150,
  },
  title: {
    
  }
});

export default Card;
