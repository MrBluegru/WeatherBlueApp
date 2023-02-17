import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import MinimalCard from "../components/card/MinimalCard";
import searchCitiesByName from "../utils/searchByName";
import { useTheme } from "../hooks/useTheme";
import { styles } from "../styles/favoriteScreen.Styles";
import handlerLanguage from "../utils/language";

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
        <View style={styles.containerNoFav}>
          <Text
            style={
              isDarkTheme
                ? [styles.textMgs, styles.textDark]
                : [styles.textMgs, styles.textLight]
            }
          >
            {handlerLanguage("noFavoritesMsg")}
          </Text>
        </View>
      ) : citiesData.length ? (
        <FlatList
          data={citiesData}
          renderItem={({ item: city }) => (
            <MinimalCard city={city} btnDelete={false} />
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../img/loading.gif")}
            resizeMode="center"
            style={{ height: 140, width: 130 }}
          />
          <View style={styles.containerLoading}>
            <Text
              style={
                isDarkTheme
                  ? [styles.textMgs, styles.textDark]
                  : [styles.textMgs, styles.textLight]
              }
            >
              {handlerLanguage("loadingMsg")}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;
