import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../styles/searchScreen.Styles";
import ListCities from "../components/listCities/ListCities";
import SearchCities from "../components/search/SearchCities";

const SearchScreen = () => {
  const cities = useSelector((state) => state.cities.cities);

  return (
    <View style={styles.container}>
      <SearchCities />
      {cities.length ? <ListCities /> : null}
    </View>
  );
};

export default SearchScreen;
