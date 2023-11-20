import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screen/Home";
import MainTabs from "./MainTabs";
import RegisterLogin from "../Login/RegisterLogin";
import LogIn from "../Login/LogIn";
import ClassLiteratura from "../screen/subjects/ClassLiteratura";
import TasckLiteratura from "../screen/tasks/TasckLiteratura";
import TasckMatematica from "../screen/tasks/TasckMatematica";
import ClassMatematica from "../screen/subjects/ClassMatematica";
import ClassEnglish from "../screen/subjects/ClassEnglish";
import GaleriaArte from "../screen/tasks/GaleriaArte";
import ClassArte from "../screen/subjects/ClassArte";
import TasckHistoria from "../screen/tasks/TasckHistoria";
import ClassHistoria from "../screen/subjects/ClassHistoria";
import TasckCiencia from "../screen/tasks/TasckCiencia";
import ClassCiencia from "../screen/subjects/ClassCiencia";
import TasckEnglish from "../screen/tasks/TasckEnglish";
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
          name='TasckLiteratura'
          component={TasckLiteratura}
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
          name='TasckMatematica'
          component={TasckMatematica}
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
          name='TasckEnglish'
          component={TasckEnglish}
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
          name='TasckCiencia'
          component={TasckCiencia}
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
          name='TasckHistoria'
          component={TasckHistoria}
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
