import React from 'react'
import { StyleSheet, Text, View, } from 'react-native';


const ClassMatematica = () => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a la clase de Matematica</Text>
    </View>
  );
};

export default ClassMatematica;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});