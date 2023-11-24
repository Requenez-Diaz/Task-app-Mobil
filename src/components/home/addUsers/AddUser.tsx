// AddUsers Component
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AddUsersProps from "./AddUsersProps";
import usersData from "../../../data/user.data";

const AddUsers = () => {
  return (
    <>
      <Text style={styles.header}>Sugerencias para ti</Text>
      <View style={styles.container}>
        {usersData.map((user, index) => (
          <AddUsersProps key={index} nameI={user.name} img={user.img} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // Otros estilos según sea necesario
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default AddUsers;
