import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";
import { styles } from "../../styles/searchCities.Styles";
import searchCitiesByName from "../../utils/searchByName";
import { useDispatch, useSelector } from "react-redux";
import { addCitieReducer } from "../../redux/citiesSlice";

const SearchCities = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const [city, setCity] = useState("");

  const onSearch = async () => {
    if (city === "") {
      Alert.alert("Alerta", "Se requiere un nombre que buscar");
    } else {
      const newCitie = await searchCitiesByName(city);
      dispatch(addCitieReducer(newCitie));
    }
  };

  return (
    <View style={cities.length ? styles.initialSearch : styles.lastISearch}>
      <TextInput
        value={city}
        placeholder="city"
        onChangeText={setCity}
        onSubmitEditing={onSearch}
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchCities;
