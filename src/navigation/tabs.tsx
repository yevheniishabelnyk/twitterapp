import React from "react";
import { Image, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./home";

import Settings from "../screens/Settings";

import HOME_ICON from "../assets/icons/home.png";
import SETTINGS_ICON from "../assets/icons/settings.png";
import { SCREEN_NAMES } from "../utils/constants";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: () => {
    let icon;

    if (route.name === SCREEN_NAMES.HOME_STACK) {
      icon = HOME_ICON;
    } else if (route.name === SCREEN_NAMES.SETTINGS) {
      icon = SETTINGS_ICON;
    }

    return <Image source={icon} style={styles.icon} />;
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={SCREEN_NAMES.HOME_STACK}
        component={HomeStack}
        options={{ title: SCREEN_NAMES.HOME, headerShown: false }}
      />

      <Tab.Screen name={SCREEN_NAMES.SETTINGS} component={Settings} />
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
