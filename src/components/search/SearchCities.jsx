import React, { useState } from "react";
import { Text, View, TextInput, Button, FlatList } from "react-native";
import { styles } from "../../styles/searchCities.Styles";
import { API_KEY } from "@env";
import MinimalCard from "../card/MinimalCard";

const SearchCities = () => {
  const [city, setCity] = useState("");
  const [cities, setChangeCities] = useState([]);
  const onSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    const cityS = {
      id: data.id,
      name: data.name,
      weather: data.weather[0].description,
      feelsLike: data.main.feels_like,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      img: data.weather[0].icon,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      seaLevel: data.main.sea_level,
      grndLevel: data.main.grnd_level,
      visibility: data.visibility,
      windSpeed: data.wind.speed,
      windDeg: data.wind.deg,
      windGust: data.wind.gust,
      clouds: data.clouds.all,
      timeDataUnix: data.dt,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      lat: data.coord.lat,
      lon: data.coord.lon,
    };
    setChangeCities((oldCities) => [...oldCities, cityS]);
    setCity("");
  };
  return (
    <View style={styles.allView}>
      <View
        style={cities.length ? styles.search : [styles.search, { flex: 1 }]}
      >
        <TextInput
          value={city}
          placeholder="city"
          onChangeText={setCity}
          onSubmitEditing={onSearch}
          style={styles.textInput}
        />
      </View>
      {cities.length ? (
        <View style={styles.citiesL}>
          <FlatList
            data={cities}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: city }) => <MinimalCard {...city} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : null}
    </View>
  );
};

export default SearchCities;
