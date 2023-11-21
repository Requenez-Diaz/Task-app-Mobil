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
      <View style={styles.header}>
        <Text style={styles.headerText}>¡Bienvenido a tus Clases!</Text>
        <Text style={styles.introText}>
          Explora y elige tus materias favoritas para comenzar.
        </Text>
      </View>

      <View style={styles.subjectContainer}>
        <Text style={styles.subject}>Mis Materias:</Text>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0077cc",
    marginBottom: 8,
  },
  introText: {
    fontSize: 18,
    color: "#444",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  subjectContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  subject: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0077cc",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
});

export default Subject;
