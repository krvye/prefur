import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../screens/Authentication/LandingScreen";
import SignInScreen from "../screens/Authentication/SignInScreen";
import SignUpScreen from "../screens/Authentication/SignUpScreen";

const Stack = createStackNavigator();

export default function AuthenticationNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
