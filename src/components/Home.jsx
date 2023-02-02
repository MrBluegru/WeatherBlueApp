import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { searchCurrentCity } from "../utils/searchByCoords";
import { styles } from "../styles/home.Styles";
import useLocate from "../hooks/useLocate";
import MapView from "react-native-maps";
import { colorByTemp } from "../utils/colorsTemp";

const Home = () => {
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

  const map = () => {
    return (
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: coordsCity.lat,
          longitude: coordsCity.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="hybrid"
        showsUserLocation={true}
        showsMyLocationButton={true}
        zoomEnabled={true}
        rotateEnabled={false}
        scrollEnabled={true}
      />
    );
  };
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
            <Text>{JSON.stringify(dataCity)}</Text>
            <View style={styles.containerMap}>
              {coordsCity !== null ? map() : null}
            </View>
          </ScrollView>
        </View>
      ) : (
        <Text>"Loading...."</Text>
      )}
    </>
  );
};

export default Home;
