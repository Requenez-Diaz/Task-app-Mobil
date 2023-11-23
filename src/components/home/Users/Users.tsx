import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UsersProps from "./UsersProps";
import usersData from "../../../data/user.data";
import { Badge } from "@rneui/base";

const Users = () => {
  return (
    <View>
      <Text style={styles.header}>Users conected</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {usersData.map((user, index) => (
            <UsersProps key={index} nameI={user.name} img={user.img} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
});
