//import liraries
import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProfileProps from "../home/ProfileProps";
import CardContainer from "../home/cards/CardContainer";
import Users from "../home/Users/Users";
import AddUser from "../home/addUsers/AddUser";

// create a component
const MyComponent = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <ProfileProps />
      <CardContainer />
      <Users />
      <AddUser />
    </ScrollView>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
});
