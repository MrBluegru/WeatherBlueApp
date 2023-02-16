import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";
import { styles } from "../../styles/searchCities.Styles";
import searchCitiesByName from "../../utils/searchByName";
import { useDispatch, useSelector } from "react-redux";
import { addCitieReducer } from "../../redux/citiesSlice";
import handlerLanguage from "../../utils/language";

const SearchBar = () => {
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
      style={styles.textInput}
    />
  );
};

export default SearchBar;
