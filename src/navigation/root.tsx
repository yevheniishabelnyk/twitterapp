import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import TabNavigator from "./tabs";

const Stack = createStackNavigator();

const Navigation = () => {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <TabNavigator />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
