import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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

const CardInit: React.FC = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.container}>
        <CardItem
          title='Aprende con los expertos'
          slogan='La mejor oportunidad para viajar por todo el mundo'
          year={2023}
        />
        <CardItem
          title='Aprende con los expertos'
          slogan='La mejor oportunidad para viajar por todo el mundo'
          year={2023}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
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

export default CardInit;
