import React, { useEffect, useState } from "react";
import { View, ScrollView, Image } from "react-native";
import searchCurrentCity from "../utils/searchByCoords";
import colorByTemp from "../utils/colorsTemp";
import { styles } from "../styles/home.Styles";
import useLocate from "../hooks/useLocate";
import AllDataCard from "../components/card/AllDataCard";

const HomeScreen = () => {
  const { location } = useLocate();
  const [coordsCity, setCoordsCity] = useState(null);
  const [dataCity, setDataCity] = useState(null);

  useEffect(() => {
    if (location !== null) {
      const lat = location.coords.latitude;
      const long = location.coords.longitude;
      setCoordsCity({ lat, long });
    }
  }, [location]);

  useEffect(() => {
    const search = async () => {
      if (coordsCity !== null) {
        const city = await searchCurrentCity(coordsCity.lat, coordsCity.long);
        setDataCity(city);
      }
    };
    search();
  }, [coordsCity]);

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
          <Image
            style={styles.icon}
            source={require("../img/loading.gif")}
          />
        </View>
      )}
    </>
  );
};

export default HomeScreen;