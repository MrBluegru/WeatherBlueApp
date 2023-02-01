import React, { useState } from "react";
import { Text, View, TextInput, Button, FlatList } from "react-native";
import { styles } from "../styles/searchCities.Styles";
import { API_KEY } from "@env";
import Card from "./Card";

const SearchCities = () => {
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

export default SearchCities;
