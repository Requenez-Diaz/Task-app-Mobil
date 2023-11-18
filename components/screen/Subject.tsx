import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  nabigation: any;
}

const Subject = ({ navigation }: Props): JSX.Element => {
  const handlePress = () => {
    navigation.navigate("ClassEnglish");
  };

  return (
    <View style={styles.container}>
      <Text>My Subjects</Text>

      <TouchableOpacity>
        <View style={styles.clas} onPress={handlePress}>
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
