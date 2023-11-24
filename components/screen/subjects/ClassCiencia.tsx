import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Lessons from '../../Leassons/Lessons';
import Resources from '../../Leassons/Resource';
import Assignment from '../../Leassons/Assigment';
import Example from '../../Leassons/Example';

interface Props {
  navigation: any;
}

const ClassLiteratura = ({ navigation }: Props): JSX.Element => {
  const handleTasckCiencia = () => {
    navigation.navigate('TaskLiteratura');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Ciencia!</Text>
      <Lessons
        title="Lección 1: Introducción a la Ciencia"
        content="Exploraremos los principios fundamentales de la ciencia y su importancia en la comprensión del mundo natural."
      />

      <Lessons
        title="Experimento Casero"
        content="Realiza un experimento sencillo en casa para aplicar los conceptos aprendidos en clase."
      />

      <Resources
        title="Recursos Multimedia"
        // Amplía tus conocimientos con recursos multimedia, como documentales y videos educativos:
        resources={[
          { text: 'National Geographic', url: 'https://www.nationalgeographic.com/' },
          { text: 'Khan Academy - Ciencia', url: 'https://www.khanacademy.org/science' },
        ]}
      />

      <Example
        title="Proyecto Final"
        content="Trabaja en un proyecto final relacionado con un tema de ciencia de tu elección y presenta tus hallazgos a la clase."
      />

      <Assignment
        title="Pregunta del Día"
        content="Reflexiona sobre la pregunta del día y comparte tus ideas en el foro de la clase."
        onPress={handleTasckCiencia}
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
