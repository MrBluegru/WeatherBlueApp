import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";
import { styles } from "../../styles/searchCities.Styles";
import searchCitiesByName from "../../utils/searchByName";
import { useDispatch, useSelector } from "react-redux";
import { addCitieReducer } from "../../redux/citiesSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const [city, setCity] = useState("");

  const onSearch = async () => {
    let itsEmpty = /^\s/g.test(city);
    if (city === "" || itsEmpty) {
      Alert.alert("Wait", "I need a name to search");
      setCity("");
    } else {
      const newCitie = await searchCitiesByName(city);
      dispatch(addCitieReducer(newCitie));
      setCity("");
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

export default SearchBar;
