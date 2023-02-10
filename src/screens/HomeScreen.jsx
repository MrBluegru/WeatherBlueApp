import React, { useEffect, useState } from "react";
import { View, ScrollView, Image } from "react-native";
import searchCurrentCity from "../utils/searchByCoords";
import colorByTemp from "../utils/colorsTemp";
import { styles } from "../styles/home.Styles";
import useLocate from "../hooks/useLocate";
import AllDataCard from "../components/card/AllDataCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setFavReducer } from "../redux/favoritesSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { location } = useLocate();
  const [dataCity, setDataCity] = useState(null);
  const listCities = useSelector((state) => state.favorites.favorites);

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
      ) : (
        <View style={styles.containerCenter}>
          <Image style={styles.icon} source={require("../img/loading.gif")} />
        </View>
      )}
    </>
  );
};

export default HomeScreen;
