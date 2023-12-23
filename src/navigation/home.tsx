import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SCREEN_NAMES } from "../utils/constants";

import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME}>
      <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
      <Stack.Screen name={SCREEN_NAMES.DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
