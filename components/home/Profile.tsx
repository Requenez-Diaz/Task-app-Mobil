import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface Props {
  name: string;
  avatar: string;
}

const Profile = ({ name, avatar }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text>{name}</Text>
        <View>
          <Image source={{ uri: avatar }} />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "green",
    alignContent: "center",
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
  },
});
