import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import Menu from "../screen/Menu";
import Subject from "../screen/Subject";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: "green",
      }}
    >
      <Tab.Screen
        name='Dashboard'
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color: gray }) => (
            <Octicons name='home' size={24} color={gray} />
          ),
        }}
      />
      <Tab.Screen
        name='Subject'
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
          tabBarIcon: ({ color: gray }) => (
            <MaterialIcons name='library-books' size={24} color={gray} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Menu'
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
          tabBarIcon: ({ color: gray }) => (
            <MaterialIcons name='library-add' size={24} color={gray} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
