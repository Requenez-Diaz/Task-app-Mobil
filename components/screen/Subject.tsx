import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";


const Subject = () => {

  return (
    <View style={styles.container}>
      <Text>My Subjects</Text>

      <TouchableOpacity>
        <View style={styles.clas}>
          <View style={styles.icons}>
            <AntDesign name='book' size={60} color='white' />
            <Text style={styles.TextEnglih}>English</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Subject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  clas: {
    width: 90,
    height: 90,
    backgroundColor: "#0693e3",
    borderRadius: 20,
  },
  icons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextEnglih: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
