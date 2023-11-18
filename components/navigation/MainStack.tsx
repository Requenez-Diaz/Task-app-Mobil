import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassEnglish from "../../screen/subjects/ClassEnglish";
import English from "../../screen/subjects/English";





const Stack = createNativeStackNavigator();

const MainStack = () => { 
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ClassEnglish" 
          component={ClassEnglish} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="English" 
          component={English} 
          options={{
            headerShown: false
          }}
        />
      
        {/* <Stack.Screen 
          name="Tabs"
          component={BottomTabs}
          options={{
            headerShown: false
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;