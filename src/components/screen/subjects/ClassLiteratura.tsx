import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Lessons from '../Leassons/Lessons';
import Resources from '../Leassons/Resource';
import Example from '../Leassons/Example';
import Assignment from '../Leassons/Assigment';

interface Props {
  navigation: any;
}

const ClassLiteratura = ({ navigation }: Props): JSX.Element => {
  const handleTasLiteratura = () => {
    navigation.navigate('TaskLiteratura');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Literatura!</Text>
      
      <Lessons
        title="Lección 1: Géneros Literarios"
        content="Exploraremos los fascinantes géneros literarios, desde la emotiva poesía hasta las cautivadoras historias en prosa."
      />

      <Lessons
        title="Actividad Interactiva"
        content="¡Prepárate para emocionarte! Participa en nuestra actividad adivinando el autor de obras literarias clásicas y modernas."
      />

      <Resources
        title="Recursos Adicionales"
        resources={[
          { text: 'Proyecto Gutenberg', url: 'https://www.gutenberg.org/' },
          { text: 'Poem Hunter', url: 'https://www.poemhunter.com/' },
        ]}
      />

      <Example
        title="Ejemplo de Poesía"
        content="No te rindas, aún estás a tiempo\nde alcanzar y comenzar de nuevo,\naceptar tus sombras, enterrar tus miedos,\nliberar el lastre, retomar el vuelo.\n- Mario Benedetti"
      />

      <Assignment
        title="Tarea Creativa"
        content="¡Inspírate! Escribe tu propio poema o relato corto y compártelo en el foro para sumergirte en el mundo de la creatividad literaria."
        onPress={handleTasLiteratura}
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

export default ClassLiteratura;
