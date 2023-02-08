import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from "../../styles/minimal.Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AllDataCard from "./AllDataCard";
import colorByTemp from "../../utils/colorsTemp";
import capitalizedWord from "../../utils/capitalizedWord";
import unixToTime from "../../utils/unixToTime";
import { useDispatch, useSelector } from "react-redux";
import { addFavReducer } from "../../redux/favoritesSlice";

const MinimalCard = (props) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const listCities = useSelector((state) => state.favorites.favorites);

  console.log(typeof listCities);

  const setFavorites = async () => {
    const newCity = { id: props.id, name: props.name };

    try {
      await AsyncStorage.setItem(
        "@FavoritesCities",
        JSON.stringify([...listCities, newCity])
      );
      dispatch(addFavReducer(newCity));
    } catch (error) {
      console.log(error);
    }
  };

  const modalViewCard = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={[
            styles.modalView,
            { backgroundColor: colorByTemp(props.temp) },
          ]}
        >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ padding: 12 }}
            alwaysBounceVertical={true}
            showsVerticalScrollIndicator={false}
          >
            <AllDataCard {...props} />
            <Button
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
              title="Close"
            />
          </ScrollView>
        </View>
      </Modal>
    );
  };

  return (
    <>
      {modalViewCard()}
      <View style={[styles.card, { backgroundColor: colorByTemp(props.temp) }]}>
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
            {props.name} {props.temp} °C
          </Text>
          <Text>{capitalizedWord(props.weather)}</Text>
          <Text>Clouds {props.clouds} %</Text>
          <Text>Feels like {props.feelsLike} °C</Text>
          <Text>Last update {unixToTime(props.timeDataUnix)}</Text>
        </View>

        <View style={styles.btons}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Entypo
              name="eye"
              size={24}
              color={"black"}
              // style={styles.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFavorites()}>
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
