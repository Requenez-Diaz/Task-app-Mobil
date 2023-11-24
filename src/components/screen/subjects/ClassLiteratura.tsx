// Importa los subcomponentes
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LessonLiteratura from '../LessonLiteratura/LessonLiteratura';
import ResourceLiteratura from '../LessonLiteratura/ResourceLiteratura';
import PoemLiteratura from '../LessonLiteratura/PoemLiteratura';
import AssignmentLiteratura from '../LessonLiteratura/AssignmentLiteratura';

interface Props {
  navigation: any;
}

const ClassLiteratura = ({ navigation }: Props): JSX.Element => {
  const handleTasckPress = () => {
    navigation.navigate('TaskLiteratura');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LessonLiteratura
        title="Lección 1: Géneros Literarios"
        content="Exploraremos los fascinantes géneros literarios, desde la emotiva poesía hasta las cautivadoras historias en prosa."
      />

      <LessonLiteratura
        title="Actividad Interactiva"
        content="¡Prepárate para emocionarte! Participa en nuestra actividad adivinando el autor de obras literarias clásicas y modernas."
      />

      <ResourceLiteratura
        title="Recursos Adicionales"
        resources={[
          { text: 'Proyecto Gutenberg', url: 'https://www.gutenberg.org/' },
          { text: 'Poem Hunter', url: 'https://www.poemhunter.com/' },
        ]}
      />

      <PoemLiteratura
        title="Ejemplo de Poesía"
        content="No te rindas, aún estás a tiempo\nde alcanzar y comenzar de nuevo,\naceptar tus sombras, enterrar tus miedos,\nliberar el lastre, retomar el vuelo.\n- Mario Benedetti"
      />

      <AssignmentLiteratura
        title="Tarea Creativa"
        content="¡Inspírate! Escribe tu propio poema o relato corto y compártelo en el foro para sumergirte en el mundo de la creatividad literaria."
        onPress={handleTasckPress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
});

export default ClassLiteratura;
