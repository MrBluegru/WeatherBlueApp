import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { language } from "./src/utils/currentLanguaje";
import handlerLanguage from "./src/utils/language";
import { StatusBar } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { useTheme } from "./src/hooks/useTheme";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const isDarkTheme = useTheme();
  const colorBackground = isDarkTheme ? "#1b2932" : "#f2f2f2";
  const borderColor = isDarkTheme ? "#fff" : "#000";

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colorBackground,
        },
        headerBackgroundContainerStyle: {
          borderBottomColor: borderColor,
          borderBottomWidth: 0.3,
        },
        headerTitleStyle: [{ color: isDarkTheme ? "#fff" : "#000" }],
        tabBarStyle: [
          {
            backgroundColor: colorBackground,
            borderTopColor: borderColor,
          },
        ],
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5998c0",
        tabBarInactiveTintColor: isDarkTheme ? "#f2f2f2" : "#1b2932",
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
          headerTitle: handlerLanguage("titleFav", language),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: handlerLanguage("tab4", language),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={30} />
          ),
          headerShown: true,
          headerTitle: handlerLanguage("titleSettg", language),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  const isDarkTheme = useTheme();
  const statusBarStyle = isDarkTheme ? "#1b2932" : "#5998c0";
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={statusBarStyle} />
      <MyTabs />
    </NavigationContainer>
  );
}
