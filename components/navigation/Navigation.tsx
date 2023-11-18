import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
//://www.youtube.com/watch?v=WMOPvJot0yI

//screens
import Home from "../../screen/Home";
import Menu from "../../screen/Menu";
import Subject from "./Subject";

//Use Icon
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';



import { Octicons } from '@expo/vector-icons';

const HomeStackNaviagator = createNativeStackNavigator();

function Tacks() {
  return (
    <HomeStackNaviagator.Navigator initialRouteName="Home">
      <HomeStackNaviagator.Screen name="Home" component={Home} />
    </HomeStackNaviagator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: "green",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "green",
            opacity: 1,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerLeft: () => (
            <View style={{ paddingLeft: 10, marginLeft: 10 }}>
              <TouchableOpacity>
                <Feather name="menu" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ),

          headerRight: () => (
            <TouchableOpacity>
              <View style={{ paddingRight: 10, marginRight: 10 }}>
                <AntDesign name="search1" size={24} color="white" />
              </View>
            </TouchableOpacity>
          ),

          headerTitleAlign: "center",
          tabBarLabel: "",
          tabBarIcon: ({ color: gray, size }) => (
            <Octicons name="home" size={24} color= {gray} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Subject"
        component={Subject}
        options={{
          headerStyle: {
            backgroundColor: "#f45133",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
          tabBarLabel: "",
          tabBarIcon: ({ color: gray, size }) => (
            <MaterialIcons name="library-books" size={24} color={gray} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerStyle: {
            backgroundColor: "#f45133",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
          tabBarLabel: "",
          tabBarIcon: ({ color: gray, size }) => (
            <MaterialIcons name="library-add" size={24} color={gray} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}