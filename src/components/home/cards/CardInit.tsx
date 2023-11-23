import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CardItem from "./CardItem";

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
          year={2023 && 2024}
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
});

export default CardInit;
