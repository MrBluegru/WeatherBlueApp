import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/cardH.Styles";

const CardH = (props) => {
  return (
    <View style={styles.containerCenter}>
      <Text style={styles.title}>{props.name}</Text>
      <Text>{props.weather}</Text>
      <Text>{props.feelsLike}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>{props.tempMin}</Text>
        <Text>{props.temp}</Text>
        <Text>{props.tempMax}</Text>
      </View>
      <Text>{props.img}</Text>
      <Text>{props.humidity}</Text>
      <Text>{props.pressure}</Text>
      <Text>{props.seaLevel}</Text>
      <Text>{props.grndLevel}</Text>
      <Text>{props.visibility}</Text>
      <Text>{props.windSpeed}</Text>
      <Text>{props.windDeg}</Text>
      <Text>{props.windGust}</Text>
      <Text>{props.clouds}</Text>
      <Text>{props.timeDataUnix}</Text>
      <Text>{props.sunrise}</Text>
      <Text>{props.sunset}</Text>
    </View>
  );
};

export default CardH;
