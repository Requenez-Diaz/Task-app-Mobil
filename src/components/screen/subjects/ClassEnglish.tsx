import React from 'react';
import { ScrollView, StyleSheet, Text, } from 'react-native';
import Lessons from '../Leassons/Lessons';
import Resources from '../Leassons/Resource';
import Assignment from '../Leassons/Assigment';

interface Props {
  navigation: any;
}

const ClassEnglish: React.FC<Props> = ({ navigation }) => {
  const handleTaskEnglish = () => {
    navigation.navigate('TaskEnglish');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Inglés!</Text>

      <Lessons
        title="Lección 1: Gramática Básica"
        content="Repasaremos conceptos de gramática básica, incluyendo verbos, sustantivos y adjetivos."
      />

      <Lessons
        title="Actividad de Vocabulario"
        content="Amplía tu vocabulario participando en esta actividad interactiva de aprendizaje de nuevas palabras."
      />

      <Resources
        title="Recursos de Lectura"
        // Descubre nuevas historias y autores con recursos de lectura recomendados:
        resources={[
          { text: 'Project Gutenberg', url: 'https://www.projectgutenberg.org/' },
          { text: 'Goodreads', url: 'https://www.goodreads.com/' },
        ]}
      />

      <Assignment
        title="Canción del Día"
        content="Escucha una canción en inglés y analiza la letra para mejorar tu comprensión auditiva y vocabulario."
        onPress={handleTaskEnglish}
      />
    </ScrollView>
  );
};

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
});

export default ClassEnglish;
