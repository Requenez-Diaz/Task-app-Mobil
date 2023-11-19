import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";
import LogIn from "../Login/LogIn";
import Subject from "../screen/Subject";
import ClassEnglish from "../screen/subjects/ClassEnglish";
import ClassMatematica from "../screen/subjects/ClassMatematica";
import ClassLiteratura from "../screen/subjects/ClassLiteratura";
import ClassCiencia from "../screen/subjects/ClassCiencia";
import ClassArte from "../screen/subjects/ClassArte";
import ClassHistoria from "../screen/subjects/ClassHistoria";
import TasckLiteratura from "../screen/tasks/TasckLiteratura";

export default function HomeStack() {
  const HomeStackNavigator = createStackNavigator();
  return (
    <HomeStackNavigator.Navigator initialRouteName='Login'>
      <HomeStackNavigator.Screen
        name='Login'
        component={LogIn}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name='Subject'
        component={Subject}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name='ClassLiteratura'
        component={ClassLiteratura}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name='TasckLiteratura'
        component={TasckLiteratura}
        options={{
          headerShown: false,
        }}
      />
        <HomeStackNavigator.Screen
          name='ClassMatematica'
          component={ClassMatematica}
          options={{
            headerShown: false,
          }}
        />
      <HomeStackNavigator.Screen
        name='ClassEnglish'
        component={ClassEnglish}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name='ClassCiencia'
        component={ClassCiencia}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name='ClassHistoria'
        component={ClassHistoria}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name='ClassArte'
        component={ClassArte}
        options={{
          headerShown: false,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}
