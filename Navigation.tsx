import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Subject from "./components/Subject";

const HomeStackNavigator = createNativeStackNavigator();

function Tacks() {
    return (
        <HomeStackNavigator.Navigator>

        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {

    return (
        <Tab.Navigator>

        </Tab.Navigator>
    )
    
}