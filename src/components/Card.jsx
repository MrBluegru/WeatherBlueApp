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
        <Text style={styles.title}>
          {props.name} {props.temp}°
        </Text>
        <Text>Weather: {props.weather}</Text>
        <Text style={styles.title}>Temperature</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>Min: {props.min}</Text>
          <Text> Max: {props.max}</Text>
        </View>
        <Text>Clouds: {props.clouds}</Text>
        <Text>Wind: {props.wind}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 140,
    height: 140,
  },
  title: {
    marginVertical: 4,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Card;
