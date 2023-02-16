import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from "../../styles/minimal.Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AllDataCard from "./AllDataCard";
import colorByTemp from "../../utils/colorsTemp";
import capitalizedWord from "../../utils/capitalizedWord";
import unixToTime from "../../utils/unixToTime";
import { useDispatch, useSelector } from "react-redux";
import { addFavReducer, deleteFavReducer } from "../../redux/favoritesSlice";
import { deleteCitieReducer } from "../../redux/citiesSlice";
import handlerLanguage from "../../utils/language";

const MinimalCard = (props) => {
  const dispatch = useDispatch();
  const { city, btnDelete } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const listCities = useSelector((state) => state.favorites.favorites);
  const alreadyAdded = listCities.filter((c) => c.id === city.id);

  const handlerFavorites = async () => {
    const newCity = { id: city.id, name: city.name };

    if (alreadyAdded.length) {
      Alert.alert(handlerLanguage("wait"), handlerLanguage("alertDeleteFav"), [
        {
          text: handlerLanguage("cancel"),
          style: "cancel",
        },
        {
          text: handlerLanguage("remove"),
          onPress: async () => {
            try {
              dispatch(deleteFavReducer(city.id));
              await AsyncStorage.setItem(
                "@FavoritesCities",
                JSON.stringify(listCities.filter((city) => city.id !== city.id))
              );
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]);
    }
    if (!alreadyAdded.length) {
      try {
        await AsyncStorage.setItem(
          "@FavoritesCities",
          JSON.stringify([...listCities, newCity])
        );
        dispatch(addFavReducer(newCity));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteCity = () => {
    try {
      dispatch(deleteCitieReducer(city.id));
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
            { backgroundColor: colorByTemp(city.temp) },
          ]}
        >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ padding: 12 }}
            alwaysBounceVertical={true}
            showsVerticalScrollIndicator={true}
          >
            <AllDataCard {...city} />
            <Button
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
              title={handlerLanguage("close")}
            />
          </ScrollView>
        </View>
      </Modal>
    );
  };

  return (
    <>
      {modalViewCard()}
      <View style={[styles.card, { backgroundColor: colorByTemp(city.temp) }]}>
        <View>
          <Image
            style={styles.icon}
            source={{
              uri: `http://openweathermap.org/img/wn/${city.img}@4x.png`,
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>
            {city.name}, {city.country} {city.temp} °C
          </Text>
          <Text>{capitalizedWord(city.weather)}</Text>
          <Text>
            {handlerLanguage("clouds")} {city.clouds} %
          </Text>
          <Text>
            {handlerLanguage("feelsLike")} {city.feelsLike} °C
          </Text>
          <Text>
            {handlerLanguage("lastUpdate")} {unixToTime(city.timeDataUnix)}
          </Text>
        </View>

        <View style={styles.btons}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Entypo name="eye" size={24} color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlerFavorites}>
            <Entypo
              name="star"
              size={24}
              color={alreadyAdded.length ? "yellow" : "black"}
            />
          </TouchableOpacity>

          {btnDelete ? (
            <TouchableOpacity onPress={deleteCity}>
              <MaterialIcons name="delete-outline" size={24} color={"black"} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
};

export default MinimalCard;
