//import liraries
import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProfileProps from "../home/ProfileProps";
import CardContainer from "../home/cards/CardContainer";
import Users from "../home/Users/Users";
import AddUser from "../home/addUsers/AddUser";
import ContainerUsers from "../home/addUsers/ContainerUsers";

// create a component
const MyComponent = () => {
  return (
    <>
      <ProfileProps />

      <ScrollView>
        <CardContainer />
        <Users />
        <ContainerUsers />
      </ScrollView>
    </>
  );
};
export default MyComponent;
