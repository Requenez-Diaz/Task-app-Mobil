import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./MainTabs";
import Screen from "../Login/LogIn";
import { useState } from "react";

export default function NavigationTabs() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
