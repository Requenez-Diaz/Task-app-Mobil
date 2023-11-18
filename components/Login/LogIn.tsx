import Button from "../home/cards/Button";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface NavigationProps {
  navigation: any;
}

const LogIn = ({ navigation }: NavigationProps) => {
  const handleLogin = () => {
    // Navigate to the Home screen
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>Login</Text>
      <View>
        <TextInput placeholder='User name' />
        <TextInput placeholder='Password' />
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({});
