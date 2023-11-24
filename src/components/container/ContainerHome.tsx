//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileProps from "../home/ProfileProps";
import CardContainer from "../home/cards/CardContainer";
import Users from "../home/Users/Users";

// create a component
const MyComponent = () => {
  return (
    <View>
      <ProfileProps />
      <CardContainer />
      <Users/>
    </View>
  );
};

export default MyComponent;
