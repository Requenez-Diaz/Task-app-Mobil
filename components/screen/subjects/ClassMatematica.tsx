import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';

interface Props {
  navigation: any;
}

const ClassMatematica = ({ navigation }:Props):JSX.Element => {

  const handleTasMatckPress = () => {
    navigation.navigate('TasckMatematica')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Matemáticas!</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Lección 1: Números y Operaciones</Text>
        <Text style={styles.lessonText}>
          Descubre los fascinantes conceptos de números naturales, enteros, fracciones y operaciones básicas.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ejercicio Práctico: Suma y Resta</Text>
        <Text style={styles.activityText}>
          Mejora tus habilidades con ejercicios prácticos de suma y resta de números.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recursos en Línea</Text>
        <Text style={styles.resourceText}>
          Amplía tu conocimiento con recursos en línea como
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.khanacademy.org/')}>
            Khan Academy
          </Text>
          {' '}
          y
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.mathway.com/')}>
            Mathway
          </Text>.
        </Text>
      </View>

      <View style={styles.problemContainer}>
        <Text style={styles.sectionTitle}>Problema del Día</Text>
        <Text style={styles.problemText}>
          Resuelve el siguiente problema matemático: ¿Cuál es el área de un triángulo con base 8 y altura 12?
        </Text>
      </View>

      <TouchableOpacity onPress={handleTasMatckPress}>
        <View style={styles.assignmentContainer}>
          <Text style={styles.sectionTitle}>Tarea: Problemas de Desafío</Text>
          <Text style={styles.assignmentText}>
            Aborda los problemas de desafío proporcionados y comparte tus soluciones en el foro de la clase.
          </Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default ClassMatematica;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  sectionContainer: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  lessonText: {
    fontSize: 18,
    marginBottom: 16,
    color: '#555',
  },
  activityText: {
    fontSize: 18,
    marginBottom: 16,
    color: '#555',
  },
  resourceText: {
    fontSize: 18,
    marginBottom: 16,
    color: '#555',
  },
  linkText: {
    color: '#4285F4',
    textDecorationLine: 'underline',
  },
  problemContainer: {
    marginBottom: 20,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 16,
  },
  problemText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  assignmentContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 16,
    elevation: 5,
  },
  assignmentText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});