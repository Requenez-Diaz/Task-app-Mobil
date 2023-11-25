import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Lessons from '../Leassons/Lessons';
import Resources from '../Leassons/Resource';
import Example from '../Leassons/Example';
import Assignment from '../Leassons/Assigment';

interface Props {
  navigation: any;
}

const ClassMatematica = ({ navigation }: Props): JSX.Element => {
  const handleTasckMatematic = () => {
    navigation.navigate('TaskMatematica');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Matematica!</Text>
      <Lessons
        title="Lección 1: Números y Operaciones"
        content="Descubre los fascinantes conceptos de números naturales, enteros, fracciones y operaciones básicas."
      />

      <Lessons
        title="Ejercicio Práctico: Suma y Resta"
        content="Mejora tus habilidades con ejercicios prácticos de suma y resta de números."
      />

      <Resources
        title="Recursos en Línea"
        resources={[
          { text: 'Khan Academy', url: 'https://www.khanacademy.org/' },
          { text: 'Mathway', url: 'https://www.mathway.com/' },
        ]}
      />

      <Example
        title="Problema del Día"
        content="Resuelve el siguiente problema matemático: ¿Cuál es el área de un triángulo con base 8 y altura 12?"
      />

      <Assignment
        title="Tarea: Problemas de Desafío"
        content="Aborda los problemas de desafío proporcionados y comparte tus soluciones en el foro de la clase."
        onPress={handleTasckMatematic}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default ClassMatematica;
