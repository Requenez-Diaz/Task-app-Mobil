import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import TaskLiteratura from "../screen/tasks/TaskLiteratura";
import TaskMatematica from "../screen/tasks/TaskMatematica";
import TaskEnglish from "../screen/tasks/TaskEnglish";
import TaskCiencia from "../screen/tasks/TaskCiencia";
import TaskHistoria from "../screen/tasks/TaskHistoria";

import Home from "../screen/Home";
import MainTabs from "./MainTabs";
import RegisterLogin from "../Login/RegisterLogin";
import LogIn from "../Login/LogIn";

import ClassLiteratura from "../screen/subjects/ClassLiteratura";
import ClassMatematica from "../screen/subjects/ClassMatematica";
import ClassEnglish from "../screen/subjects/ClassEnglish";
import GaleriaArte from "../screen/tasks/GaleriaArte";
import ClassArte from "../screen/subjects/ClassArte";
import ClassHistoria from "../screen/subjects/ClassHistoria";
import ClassCiencia from "../screen/subjects/ClassCiencia";
import Subject from "../screen/Subject";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={LogIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Subject'
          component={Subject}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ClassLiteratura'
          component={ClassLiteratura}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name='TaskLiteratura'
          component={TaskLiteratura}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name='ClassMatematica'
          component={ClassMatematica}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='TaskMatematica'
          component={TaskMatematica}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ClassEnglish'
          component={ClassEnglish}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='TaskEnglish'
          component={TaskEnglish}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ClassCiencia'
          component={ClassCiencia}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='TaskCiencia'
          component={TaskCiencia}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ClassHistoria'
          component={ClassHistoria}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='TaskHistoria'
          component={TaskHistoria}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ClassArte'
          component={ClassArte}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='GaleriaArte'
          component={GaleriaArte}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Tab'
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
