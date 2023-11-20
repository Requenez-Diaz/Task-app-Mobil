import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';

interface Props {
  navigation: any;
}

const ClassEnglish = ({ navigation }:Props):JSX.Element => {

  const handleTaskEnglish = () => {
    navigation.navigate('TasckEnglish')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Inglés!</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Lección 1: Gramática Básica</Text>
        <Text style={styles.lessonText}>
          Repasaremos conceptos de gramática básica, incluyendo verbos, sustantivos y adjetivos.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Actividad de Vocabulario</Text>
        <Text style={styles.activityText}>
          Amplía tu vocabulario participando en esta actividad interactiva de aprendizaje de nuevas palabras.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recursos de Lectura</Text>
        <Text style={styles.resourceText}>
          Descubre nuevas historias y autores con recursos de lectura recomendados:
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.projectgutenberg.org/')}>
            Project Gutenberg
          </Text>
          {' '}
          y
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.goodreads.com/')}>
            Goodreads
          </Text>
        </Text>
      </View>

      <View style={styles.songContainer}>
        <Text style={styles.sectionTitle}>Canción del Día</Text>
        <Text style={styles.songText}>
          Escucha una canción en inglés y analiza la letra para mejorar tu comprensión auditiva y vocabulario.
        </Text>
      </View>

      <TouchableOpacity onPress={handleTaskEnglish}>
        <View style={styles.assignmentContainer}>
          <Text style={styles.sectionTitle}>Tarea: Escritura Creativa</Text>
          <Text style={styles.assignmentText}>
            Escribe un breve párrafo sobre tu tema favorito y compártelo con tus compañeros en el foro de la clase.
          </Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default ClassEnglish;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
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
  songContainer: {
    marginBottom: 20,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 16,
  },
  songText: {
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