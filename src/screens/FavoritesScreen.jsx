import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import MinimalCard from "../components/card/MinimalCard";
import searchCitiesByName from "../utils/searchByName";

const FavoritesScreen = () => {
  const listCities = useSelector((state) => state.favorites.favorites);
  const [citiesData, setCitiesData] = useState([]);

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
    <View>
      {listCities !== null ? (
        <FlatList
          data={citiesData}
          renderItem={({ item: city }) => (
            <MinimalCard city={city} btnDelete={false} />
          )}
          ItemSeparatorComponent={() => <Text> </Text>}
        />
      ) : (
        <Text>No favorites for now</Text>
      )}
    </View>
  );
};

export default FavoritesScreen;
