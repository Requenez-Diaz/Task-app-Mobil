import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

interface RegisterProps {
  navigation: any;
}

const RegisterLogin = ({ navigation }: RegisterProps) => {
  const handleRegister = () => {
    navigation.navigate("Tab");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder='User name'
          placeholderTextColor='#666'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#666'
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor='#666'
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder='Number Phone'
          placeholderTextColor='#666'
          secureTextEntry={true}
        />

        <CustomButton
          onPress={handleRegister}
          title='Register'
          buttonStyle={{ backgroundColor: "blue" }}
          textStyle={{ color: "white" }}
        />
      </View>
    </View>
  );
};

export default RegisterLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    width: "80%",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
