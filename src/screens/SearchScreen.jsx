import React from "react";
import { ImageBackground, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../styles/searchScreen.Styles";
import ListCities from "../components/listCities/ListCities";
import SearchBar from "../components/search/SearchBar";

const SearchScreen = () => {
  const cities = useSelector((state) => state.cities.cities);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/globe.gif")}
        style={styles.background}
        resizeMode="cover"
      >
        <SearchBar />
        {cities.length ? <ListCities /> : null}
      </ImageBackground>
    </View>
  );
};

export default SearchScreen;
