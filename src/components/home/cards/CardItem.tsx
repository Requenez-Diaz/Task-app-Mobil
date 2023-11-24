import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardsProps from "./CardsProps";
import Button from "./Button";
interface CardItemProps {
  title: string;
  slogan: string;
  year: number;
}

const CardItem: React.FC<CardItemProps> = ({ title, slogan, year }) => (
  <View style={styles.card}>
    <CardsProps title={title} slogan={slogan} year={year} />
    <Button />
  </View>
);

export default CardItem;

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 350,
    backgroundColor: "rgba(52, 152, 219, 0.7)",
    borderRadius: 10,
    padding: 20,
    justifyContent: "space-between",
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  slogan: {
    fontSize: 16,
    color: "#fff",
  },
  year: {
    fontSize: 14,
    color: "#fff",
  },
});
