import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const listCities = useSelector((state) => state.favorites.favorites);
  return (
    <View>
      <Text>No favorites for now</Text>
      {listCities !== null ? (
        <FlatList
          data={listCities}
          renderItem={({ item: city }) => <Text>{city.name} id:{city.id}</Text>}
          ItemSeparatorComponent={() => <Text> </Text>}
        />
      ) : null}
    </View>
  );
};

export default FavoritesScreen;
