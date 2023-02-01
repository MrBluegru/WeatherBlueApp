import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { searchCurrentCity } from "../utils/searchByCoords";
import { styles } from "../styles/home.Styles";
import useLocate from "../hooks/useLocate";
import Card from "./Card";

const Home = () => {
  const { location } = useLocate();
  const [coordsCity, setCoordsCity] = useState(null);
  const [dataCity, setDataCity] = useState(null);

  useEffect(() => {
    if (location !== null) {
      const lat = location.coords.latitude;
      const long = location.coords.longitude;
      setCoordsCity({ lat, long });
    }
  }, [location]);

  useEffect(() => {
    return async () => {
      if (coordsCity !== null) {
        const city = await searchCurrentCity(coordsCity.lat, coordsCity.long);
        setDataCity(city);
      }
    };
  }, [location]);

  console.log(coordsCity);
  console.log(dataCity);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card {...dataCity} />
      </ScrollView>
    </View>
  );
};

export default Home;
