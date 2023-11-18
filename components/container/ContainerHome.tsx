//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileProps from "../home/ProfileProps";
import CardContainer from "../home/cards/CardContainer";

// create a component
const MyComponent = () => {
  return (
    <View>
      <ProfileProps />
      <CardContainer />
    </View>
  );
};

export default MyComponent;
