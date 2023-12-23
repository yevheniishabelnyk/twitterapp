import React from "react";

import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SCREEN_NAMES } from "../utils/constants";

import { getIsAuthenticated } from "../store/selectors";

import Login from "../screens/Login";
import TabNavigator from "./tabs";

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };

const Navigation = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {isAuthenticated ? (
          <Stack.Screen name={SCREEN_NAMES.APP} component={TabNavigator} />
        ) : (
          <Stack.Screen name={SCREEN_NAMES.LOGIN} component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
