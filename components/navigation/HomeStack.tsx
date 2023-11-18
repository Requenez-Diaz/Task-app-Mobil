import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";
import LogIn from "../Login/LogIn";

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
    </HomeStackNavigator.Navigator>
  );
}
