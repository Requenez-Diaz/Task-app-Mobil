// Subject.tsx

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SubjectItem from "./SubjectItem";

interface Props {
  navigation: any;
}

const Subject: React.FC<Props> = ({ navigation }) => {
  const handlePress = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subject}>My Subjects:</Text>

      <View style={styles.rowContainer}>
        <SubjectItem
          iconName="book"
          text="Literatura"
          onPress={() => handlePress("ClassLiteratura")}
        />

        <SubjectItem
          iconName="calculator"
          text="Matemática"
          onPress={() => handlePress("ClassMatematica")}
        />

        <SubjectItem
          iconName="flag"
          text="Inglés"
          onPress={() => handlePress("ClassEnglish")}
        />
      </View>

      <View style={styles.rowContainer}>
        <SubjectItem
          iconName="book"
          text="Ciencias"
          onPress={() => handlePress("ClassCiencia")}
        />

        <SubjectItem
          iconName="book"
          text="Historia"
          onPress={() => handlePress("ClassHistoria")}
        />

        <SubjectItem
          iconName="picture"
          text="Arte"
          onPress={() => handlePress("ClassArte")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Subject;
