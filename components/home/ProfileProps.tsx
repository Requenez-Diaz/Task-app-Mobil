import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "./Profile";

const ProfileProps = () => {
  return (
    <View>
      <Profile
        name=' Juan'
        avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU'
      />
    </View>
  );
};

export default ProfileProps;

const styles = StyleSheet.create({});
