import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

const Subject = ({ navigation }: Props): JSX.Element => {

  const handleLiteraturaPress = () => {
    navigation.navigate('ClassLiteratura');
  };

  const handleMatematicPress = () => {
    navigation.navigate('ClassMatematica');
  };

  const handleInglesPress = () => {
    navigation.navigate('ClassEnglish');
  };

  const handleCienciaPress = () => {
    navigation.navigate('ClassCiencia');
  };

  const handleHistoriaPress = () => {
    navigation.navigate('ClassHistoria');
  };
  const handleArtePress = () => {
    navigation.navigate('ClassArte');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subject}>My Subjects:</Text>

      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={handleLiteraturaPress}>
          <View style={styles.clas}>
            <View style={styles.icons}>
              <AntDesign name='book' size={60} color='white' />
              <Text style={styles.text}>Literatura</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMatematicPress}>
          <View style={styles.clas}>
            <View style={styles.icons}>
              <AntDesign name='calculator' size={60} color='white' />
              <Text style={styles.text}>Matemática</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleInglesPress}>
          <View style={styles.clas}>
            <View style={styles.icons}>
              <AntDesign name='flag' size={60} color='white' />
              <Text style={styles.text}>Inglés</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={handleCienciaPress}>
          <View style={styles.clas}>
            <View style={styles.icons}>
              <AntDesign name='book' size={60} color='white' />
              <Text style={styles.text}>Ciencias</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleHistoriaPress}>
          <View style={styles.clas}>
            <View style={styles.icons}>
              <AntDesign name='book' size={60} color='white' />
              <Text style={styles.text}>Historia</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleArtePress}>
          <View style={styles.clas}>
            <View style={styles.icons}>
              <AntDesign name='picture' size={60} color='white' />
              <Text style={styles.text}>Arte</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

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
  subject: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  clas: {
    width: 90,
    height: 90,
    backgroundColor: "#0693e3",
    borderRadius: 20,
    margin: 5
  },
  icons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
