import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface CardProps {
  title: string;
  slogan: string;
  year: number;
}

const CardsProps: React.FC<CardProps> = ({ title, slogan, year }) => {
  return (
    <View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.slogan}>{slogan}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
    </View>
  );
};

export default CardsProps;

const styles = StyleSheet.create({
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
