import React from "react";
import { Image, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./home";

import Settings from "../screens/Settings";

import HOME_ICON from "../assets/icons/home.png";
import SETTINGS_ICON from "../assets/icons/settings.png";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: () => {
    let icon;

    if (route.name === "HomeStack") {
      icon = HOME_ICON;
    } else if (route.name === "Settings") {
      icon = SETTINGS_ICON;
    }

    return <Image source={icon} style={styles.icon} />;
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='HomeStack' component={HomeStack} options={{ title: "Home" }} />

      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

export default TabNavigator;
