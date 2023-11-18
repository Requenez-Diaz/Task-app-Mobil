import React from 'react'
import { StyleSheet, Text, View, } from 'react-native';


const ClassEnglish = () => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a la clase de</Text>
    </View>
  );
};

export default ClassEnglish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});