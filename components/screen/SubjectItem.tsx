import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface SubjectItemProps {
  iconName: string;
  text: string;
  onPress: () => void;
}

const SubjectItem: React.FC<SubjectItemProps> = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.clas}>
        <View style={styles.icons}>
          <AntDesign name={iconName} size={60} color="white" />
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clas: {
    width: 90,
    height: 90,
    backgroundColor: "#0693e3",
    borderRadius: 20,
    margin: 5,
  },
  icons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SubjectItem;
