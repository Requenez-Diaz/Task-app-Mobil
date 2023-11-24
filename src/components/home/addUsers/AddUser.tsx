import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import usersData from "../../../data/user.data";
import AddUsersProps from "./AddUsersProps";

const AddUser = () => {
  return (
    <ScrollView>
      <Text style={styles.header}>Add Users</Text>
      <View style={styles.container}>
        {usersData.map((user, index) => (
          <AddUsersProps key={index} nameI={user.name} img={user.img} />
        ))}
      </View>
    </ScrollView>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  container: {
    display: "flex",
  },
});
