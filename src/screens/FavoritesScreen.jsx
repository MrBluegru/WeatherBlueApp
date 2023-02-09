import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const listCities = useSelector((state) => state.favorites.favorites);

  return (
    <View>
      {listCities !== null ? (
        <FlatList
          data={listCities}
          renderItem={({ item: city }) => (
            <Text>
              City: {city.name} id:{city.id}
            </Text>
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
