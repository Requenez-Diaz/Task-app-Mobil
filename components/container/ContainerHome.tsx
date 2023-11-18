//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileProps from "../home/ProfileProps";
import CardContainer from "../home/cards/CardContainer";

// create a component
const MyComponent = () => {
  return (
    <div>
      <ProfileProps />
      <CardContainer />
    </div>
  );
};

//make this component available to the app
export default MyComponent;
