import React, { useEffect, useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import searchCurrentCity from "../utils/searchByCoords";
import colorByTemp from "../utils/colorsTemp";
import { styles } from "../styles/homeScreen.Styles";
import useLocate from "../hooks/useLocate";
import AllDataCard from "../components/card/AllDataCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setFavReducer } from "../redux/favoritesSlice";
import handlerLanguage from "../utils/language";
import { setSettgReducer } from "../redux/settingsSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { location, error } = useLocate();
  const [dataCity, setDataCity] = useState(null);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const favorites = await AsyncStorage.getItem("@FavoritesCities");
        if (favorites !== null) {
          dispatch(setFavReducer(JSON.parse(favorites)));
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getSettings = async () => {
      try {
        const settings = await AsyncStorage.getItem("@SettingsWeatherB");
        if (settings !== null) {
          dispatch(setSettgReducer(JSON.parse(settings)));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFavorites();
    getSettings();
  }, []);

  useEffect(() => {
    if (location !== null) {
      const search = async () => {
        const city = await searchCurrentCity(
          location.coords.latitude,
          location.coords.longitude
        );
        setDataCity(city);
      };
      search();
    }
  }, [location]);

  return (
    <>
      {dataCity !== null ? (
        <View
          style={[
            styles.container,
            { backgroundColor: colorByTemp(dataCity.temp) },
          ]}
        >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ padding: 10 }}
            alwaysBounceVertical={true}
            showsVerticalScrollIndicator={false}
          >
            <AllDataCard {...dataCity} />
          </ScrollView>
        </View>
      ) : error ? (
        <View style={styles.containerCenter}>
          <Image
            source={require("../img/errorLocate.gif")}
            style={styles.iconError}
          />
          <View>
            <Text style={styles.errorLocate}>
              {handlerLanguage("errorLocate")}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.containerCenter}>
          <Image style={styles.icon} source={require("../img/locate.gif")} />
        </View>
      )}
    </>
  );
};

export default HomeScreen;
