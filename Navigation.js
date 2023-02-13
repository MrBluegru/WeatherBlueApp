import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";
import { getLocales } from "expo-localization";
import handlerLanguage from "./src/utils/language";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";

const locates = getLocales();
const language = locates[0].languageCode;
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: handlerLanguage("tab1", language),
          tabBarIcon: ({ color, size }) => (
            <MaterialComunityIcons name="home" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: handlerLanguage("tab2", language),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: handlerLanguage("tab3", language),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star" color={color} size={30} />
          ),
          headerShown: true,
          headerTitle: handlerLanguage("titleFav", language)
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
