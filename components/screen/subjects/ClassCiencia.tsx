import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';

const ClassCiencia = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Ciencia!</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Lección 1: Introducción a la Ciencia</Text>
        <Text style={styles.lessonText}>
          Exploraremos los principios fundamentales de la ciencia y su importancia en la comprensión del mundo natural.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Experimento Casero</Text>
        <Text style={styles.activityText}>
          Realiza un experimento sencillo en casa para aplicar los conceptos aprendidos en clase.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recursos Multimedia</Text>
        <Text style={styles.resourceText}>
          Amplía tus conocimientos con recursos multimedia, como documentales y videos educativos:
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.nationalgeographic.com/')}>
            National Geographic
          </Text>
          {' '}
          y
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.khanacademy.org/science')}>
            Khan Academy - Ciencia
          </Text>
        </Text>
      </View>

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.questionContainer}>
          <Text style={styles.sectionTitle}>Pregunta del Día</Text>
          <Text style={styles.questionText}>
            Reflexiona sobre la pregunta del día y comparte tus ideas en el foro de la clase.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.projectContainer}>
          <Text style={styles.sectionTitle}>Proyecto Final</Text>
          <Text style={styles.projectText}>
            Trabaja en un proyecto final relacionado con un tema de ciencia de tu elección y presenta tus hallazgos a la clase.
          </Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F2F2F2',
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
  questionContainer: {
    marginBottom: 20,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 16,
  },
  questionText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  projectContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 16,
    elevation: 5,
  },
  projectText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default ClassCiencia;
