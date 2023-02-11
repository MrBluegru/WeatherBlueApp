import React, { useEffect, useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import searchCurrentCity from "../utils/searchByCoords";
import colorByTemp from "../utils/colorsTemp";
import { styles } from "../styles/home.Styles";
import useLocate from "../hooks/useLocate";
import AllDataCard from "../components/card/AllDataCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setFavReducer } from "../redux/favoritesSlice";

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
    getFavorites();
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
          <ScrollView>
            <AllDataCard {...dataCity} />
          </ScrollView>
        </View>
      ) : !error ? (
        <View style={styles.containerCenter}>
          <Image style={styles.icon} source={require("../img/locate.gif")} />
        </View>
      ) : (
        <View style={styles.containerCenter}>
          <Image
            style={[styles.icon, {marginTop: 200}]}
            source={require("../img/errorLocate.gif")}
          />
          <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
            Turn on device location.
          </Text>
        </View>
      )}
    </>
  );
};

export default HomeScreen;
