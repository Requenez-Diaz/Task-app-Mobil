import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ProfileProps {
  imageUri: string | null;
  darkMode: boolean;
  name: string;
}

const Profile = ({ 
  imageUri, 
  darkMode, 
  name
 }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View>
        {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
                <MaterialCommunityIcons
                    name="account-circle"
                    size={120}
                    color={darkMode ? '#ffffff' : '#333333'}
                />
            )}
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "#225480",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "white",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
