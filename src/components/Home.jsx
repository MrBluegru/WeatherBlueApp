import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Card from "./Card";
import { API_KEY } from "@env";

const Home = () => {
  const [city, onChangeCity] = useState("");
  const [cities, onChangeCities] = useState([]);
  const onSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    const cityS = {
      min: data.main.temp_min,
      max: data.main.temp_max,
      img: data.weather[0].icon,
      id: data.id,
      wind: data.wind.speed,
      temp: data.main.temp,
      name: data.name,
      weather: data.weather[0].main,
      clouds: data.clouds.all,
      logitude: data.coord.lon,
      latitude: data.coord.lat,
    };
    onChangeCities((oldCities) => [...oldCities, cityS]);
    onChangeCity("");
  };

  return (
    <View style={styles.allView}>
      <View style={styles.search}>
        <TextInput
          value={city}
          placeholder="city"
          style={styles.textInput}
          onChangeText={onChangeCity}
        />
        <Button title="🔎" onPress={onSearch} />
      </View>
      <View style={styles.citiesL}>
        <FlatList
          data={cities}
          ItemSeparatorComponent={() => <Text> </Text>}
          renderItem={({ item: city }) => <Card {...city} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    marginHorizontal: 10,
  },
  search: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBotton: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    width: "80%",
  },
  citiesL: {
    flex: 1,
  },
});

export default Home;
