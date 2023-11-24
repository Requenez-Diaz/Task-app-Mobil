import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import AddUsers from "./AddUser";

const ContainerUsers = () => {
  return (
    <ScrollView>
      <View>
        <AddUsers />
      </View>
    </ScrollView>
  );
};

export default ContainerUsers;
