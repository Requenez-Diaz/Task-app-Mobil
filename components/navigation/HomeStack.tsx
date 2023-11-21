import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LogIn from "../Login/LogIn";
import Home from "../screen/Home";
import MainTabs from "./MainTabs";

import ClassLiteratura from "../screen/subjects/ClassLiteratura";
import ClassMatematica from "../screen/subjects/ClassMatematica";
import ClassCiencia from "../screen/subjects/ClassCiencia";
import ClassEnglish from "../screen/subjects/ClassEnglish";
import ClassHistoria from "../screen/subjects/ClassHistoria";
import ClassArte from "../screen/subjects/ClassArte";
import Subject from "../screen/Subject";

import TaskLiteratura from "../screen/tasks/TaskLiteratura";
import TaskMatematica from "../screen/tasks/TaskMatematica";
import TaskEnglish from "../screen/tasks/TaskEnglish";
import TaskCiencia from "../screen/tasks/TaskCiencia";
import TaskHistoria from "../screen/tasks/TaskHistoria";
import GaleriaArte from "../screen/tasks/GaleriaArte";

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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='TaskLiteratura'
          component={TaskLiteratura}
          options={{
            headerShown: false,
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
