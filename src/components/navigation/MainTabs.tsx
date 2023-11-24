// MainTabs.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Menu from "../screen/Menu";
import Subject from "../screen/Subject";
import Home from "../screen/Home";
import Account from "../../../components/account/Account";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Dashboard'
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: "#225480",
      }}
    >
      <Tab.Screen
        name='Dashboard'
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Octicons name='home' size={24} color={color} />
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
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='library-books' size={24} color={color} />
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
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='library-add' size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-cog-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
