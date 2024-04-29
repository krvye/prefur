import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import AddPetScreen from "../screens/AddPetScreen";
import Profile from "../screens/ProfileScreen";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <>
      <StatusBar backgroundColor="#135D66" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#135D66" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#FAF9F6",
          tabBarActiveBackgroundColor: "#003C43",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Octicons name="home" size={20} color="white" />,
          }}
        />
        <Tab.Screen
          name="Add Pet"
          component={AddPetScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="pets" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="information-circle-outline"
                size={26}
                color="white"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <FontAwesome6 name="user" size={20} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
