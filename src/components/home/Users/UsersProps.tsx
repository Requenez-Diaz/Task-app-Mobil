// UsersProps.js
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Badge } from "@rneui/base";

interface UsersProps {
  nameI: string;
  img?: { uri: string };
  isActive?: boolean;
}

const UsersProps = ({ nameI, img, isActive = true }: UsersProps) => {
  const initial = nameI
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <View>
      <View>
        {img ? (
          <View style={styles.imageContainer}>
            <Image source={img} style={styles.image} />
            <View style={styles.overlayContainer}>
              {isActive && <Text style={styles.activeBadgeText}>A</Text>}
            </View>
          </View>
        ) : (
          <View style={styles.initialContainer}>
            <Text style={styles.initialText}>{initial}</Text>
            {isActive}
          </View>
        )}
        <View style={styles.textContainer}>
          <Text>{nameI}</Text>
        </View>
      </View>
    </View>
  );
};

export default UsersProps;

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative", // Para permitir la posición absoluta de los elementos secundarios
    marginBottom: 10,
    marginTop: 10,
  },
  overlayContainer: {
    position: "absolute", // Para posicionar encima de la imagen
    top: 0,
    right: 0,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  initialContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    position: "relative",
  },
  initialText: {
    color: "green",
    fontSize: 20,
  },
  activeBadge: {
    backgroundColor: "green",
  },
  activeBadgeText: {
    backgroundColor: "green",
    color: "white",
    padding: 5,
    borderRadius: 50,
  },
});
