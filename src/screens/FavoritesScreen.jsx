import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import MinimalCard from "../components/card/MinimalCard";
import searchCitiesByName from "../utils/searchByName";
import { useTheme } from "../hooks/useTheme";
import { styles } from "../styles/favoriteScreen.Styles";

const FavoritesScreen = () => {
  const listCities = useSelector((state) => state.favorites.favorites);
  const [citiesData, setCitiesData] = useState([]);

  const isDarkTheme = useTheme();

  useEffect(() => {
    const getDataCities = async () => {
      if (listCities !== null) {
        const citiesResponse = await Promise.all(
          listCities.map((city) => searchCitiesByName(city.name))
        );
        setCitiesData(citiesResponse);
      }
    };
    getDataCities();
  }, [listCities]);

  return (
    <View
      style={
        isDarkTheme ? [styles.container, styles.backDark] : styles.container
      }
    >
      {listCities.length < 1 ? (
        <Text>No favorites for now</Text>
      ) : (
        <FlatList
          data={citiesData}
          renderItem={({ item: city }) => (
            <MinimalCard city={city} btnDelete={false} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
