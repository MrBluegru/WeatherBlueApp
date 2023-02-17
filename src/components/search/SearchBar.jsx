import React, { useState } from "react";
import { TextInput, Alert } from "react-native";
import searchCitiesByName from "../../utils/searchByName";
import { useDispatch, useSelector } from "react-redux";
import { addCitieReducer } from "../../redux/citiesSlice";
import handlerLanguage from "../../utils/language";
import { useTheme } from "../../hooks/useTheme";
import { styles } from "../../styles/searchCities.Styles";

const SearchBar = () => {
  const isDarkTheme = useTheme();
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const [city, setCity] = useState("");

  const onSearch = async () => {
    let cityWithoutBlank = city.trim();
    const newCitie = await searchCitiesByName(cityWithoutBlank);

    if (city === "" || cityWithoutBlank === "") {
      Alert.alert("Wait", "I need a name to search");
    } else {
      const alreadyAdded = cities.filter((city) => city.id === newCitie.id);

      if (newCitie === "city not found") {
        return Alert.alert(
          `${handlerLanguage("wait")}`,
          `${city} ${handlerLanguage("notFound")}`
        );
      }
      if (!alreadyAdded.length) {
        dispatch(addCitieReducer(newCitie));
        setCity("");
      } else {
        return (
          Alert.alert(
            `${handlerLanguage("wait")}`,
            `${handlerLanguage("cityAdded")}`
          ),
          { cancelable: true }
        );
      }
    }
  };

  return (
    <TextInput
      value={city}
      placeholder={handlerLanguage("placeHolderSearch")}
      onChangeText={setCity}
      onSubmitEditing={onSearch}
      placeholderTextColor={isDarkTheme ? "grey" : null}
      style={
        isDarkTheme
          ? [styles.textInput, styles.darkTheme, styles.borderFromDark]
          : [styles.textInput, styles.lightTheme, styles.borderFromLight]
      }
    />
  );
};

export default SearchBar;
