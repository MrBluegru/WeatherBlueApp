import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from "../../styles/minimal.Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AllDataCard from "./AllDataCard";

const MinimalCard = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
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

  const modalViewCard = () => {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View>
            <ScrollView contentContainerStyle={styles.modalView}>
              <AllDataCard {...props} />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <>
      {modalViewCard()}
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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
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
    </>
  );
};

export default MinimalCard;
