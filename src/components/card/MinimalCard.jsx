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
import { useTheme } from "../../hooks/useTheme";

const MinimalCard = (props) => {
  const dispatch = useDispatch();
  const { city, btnDelete } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const listCities = useSelector((state) => state.favorites.favorites);
  const alreadyAdded = listCities.filter((c) => c.id === city.id);
  const isDarkTheme = useTheme();

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
            alwaysBounceVertical={true}
            showsVerticalScrollIndicator={false}
          >
            <AllDataCard {...city} />
            <View style={styles.button}>
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                title={handlerLanguage("close")}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  return (
    <>
      {modalViewCard()}
      <View
        style={
          isDarkTheme
            ? [
                styles.card,
                styles.borderForDark,
                { backgroundColor: colorByTemp(city.temp) },
              ]
            : [
                styles.card,
                styles.borderForLight,
                { backgroundColor: colorByTemp(city.temp) },
              ]
        }
      >
        <View style={styles.iconAndTemp}>
          <Image
            style={styles.icon}
            source={{
              uri: `http://openweathermap.org/img/wn/${city.img}@4x.png`,
            }}
          />
          <Text style={styles.title}>{city.temp} °C</Text>
        </View>
        <View style={styles.containerTexts}>
          <Text style={styles.title}>
            {city.name}, {city.country}
          </Text>
          <View>
            <Text style={styles.text}>{capitalizedWord(city.weather)}</Text>

            <Text style={styles.text}>
              {handlerLanguage("feelsLike")} {city.feelsLike} °C
            </Text>
            <Text style={styles.text}>
              {handlerLanguage("lastUpdate")} {unixToTime(city.timeDataUnix)}
            </Text>
          </View>
        </View>

        <View style={styles.btons}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Entypo name="eye" size={24} color={"white"} />
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
              <MaterialIcons name="delete-outline" size={24} color={"red"} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
};

export default MinimalCard;
