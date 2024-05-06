import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import AuthenticationNavigator from "./AuthenticationNavigator";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash Screen" component={SplashScreen} />
      <Stack.Screen name="AuthenticationNavigator" component={AuthenticationNavigator} />
      <Stack.Screen name="HomeTab" component={TabNavigation} />
    </Stack.Navigator>
  );
}
