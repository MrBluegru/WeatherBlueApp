import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import Card from "./Card";

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
    console.log(cityS);
    onChangeCities((oldCities) => [...oldCities, cityS]);
    // return city;
  };

  return (
    <View style={styles.search}>
      <TextInput
        value={city}
        placeholder="city"
        style={styles.textInput}
        onChangeText={onChangeCity}
      />
      <Button title="Search" onPress={onSearch} />
      <FlatList
        data={cities}
        ItemSeparatorComponent={() => <Text> ---- </Text>}
        renderItem={({ item: city }) => <Card {...city} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingTop: Constants.statusBarHeight,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBotton: 10,
  },
});

export default Home;
