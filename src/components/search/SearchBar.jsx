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
    const newCitie = await searchCitiesByName(city);

    if (city === "" || itsEmpty) {
      Alert.alert("Wait", "I need a name to search");
    } else {
      const alreadyAdded = cities.filter((city) => city.id === newCitie.id);

      if (newCitie === "city not found") {
        return Alert.alert("Wait", `${city} city not found`);
      }
      if (!alreadyAdded.length) {
        dispatch(addCitieReducer(newCitie));
        setCity("");
      } else {
        return Alert.alert("Wait", "City already added"), { cancelable: false };
      }
    }
  };

  return (
    <View style={cities.length ? styles.initialSearch : styles.lastISearch}>
      <TextInput
        value={city}
        placeholder="🔍 Search city"
        onChangeText={setCity}
        onSubmitEditing={onSearch}
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchBar;
