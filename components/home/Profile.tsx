import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface ProfileProps {
  name: string;
  avatar: {};
}

const Profile = ({ name, avatar }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View>
          <Image style={styles.image} source={avatar} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    alignItems: "center",
    padding: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
