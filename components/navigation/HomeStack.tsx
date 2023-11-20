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
import TaskLiteratura from "../screen/tasks/TasckLiteratura";
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
          name='ClassEnglish'
          component={ClassEnglish}
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
          name='ClassHistoria'
          component={ClassHistoria}
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
