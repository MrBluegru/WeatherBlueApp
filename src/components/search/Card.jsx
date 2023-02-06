import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Card = (props) => {
  const [listCities, setListCities] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const oldCities = await AsyncStorage.getItem("@FavCities");
        oldCities !== null ? setListCities(JSON.parse(oldCities)) : null;
      } catch (error) {
        console.log(error);
      }
    };
    getFavorites();
  }, []);

  const setFavorites = async () => {
    const newCity = { id: props.id, name: props.name };

    try {
      await AsyncStorage.setItem(
        "@FavCities",
        JSON.stringify([...listCities, newCity])
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.icon}
          source={{
            uri: `http://openweathermap.org/img/wn/${props.img}@4x.png`,
          }}
        />
      </View>
      <View>
        <Text style={styles.title}>
          {props.name} {props.temp}°
        </Text>
        <Text>Weather: {props.weather}</Text>
        <Text style={styles.title}>Temperature</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>Min: {props.tempMin}</Text>
          <Text> Max: {props.tempMax}</Text>
        </View>
        <Text>Clouds: {props.clouds} %</Text>
        <Text>Wind: {props.wind}</Text>
      </View>

      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity>
          <Entypo
            name="eye"
            size={24}
            color={"black"}
            // style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={setFavorites}>
          <Entypo
            name="star"
            size={24}
            color={"black"}
            // style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="delete-outline"
            size={24}
            color={"black"}
            // style={styles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 140,
    height: 140,
  },
  title: {
    marginVertical: 4,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Card;
