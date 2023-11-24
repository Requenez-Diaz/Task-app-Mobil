import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "./Profile";

const ProfileProps = () => {
  return (
    <View>
      <Profile
        name='Avimilex Requenez Diaz'
        avatar={{ uri: "https://i.imgur.com/mxMUYqt.gif" }}
      />
    </View>
  );
};

export default ProfileProps;

const styles = StyleSheet.create({});
