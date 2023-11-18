import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Button = () => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Ir a los cursos</Text>
          <AntDesign name='arrowright' size={16} color='white' />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    width: 120,
    height: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    marginRight: 5,
  },
});
