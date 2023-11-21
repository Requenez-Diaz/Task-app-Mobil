// Importa los subcomponentes
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LessonSection from '../LessonSectionLiteratura/LessonSection';
import ResourceSection from '../LessonSectionLiteratura/ResourceSection';
import PoemSection from '../LessonSectionLiteratura/PoemSection';
import AssignmentSection from '../LessonSectionLiteratura/AssignmentSection';


interface Props {
  navigation: any;
}

const ClassLiteratura = ({ navigation }: Props): JSX.Element => {
  const handleTasckPress = () => {
    navigation.navigate('TasckLiteratura');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LessonSection
        title="Lección 1: Géneros Literarios"
        content="Exploraremos los fascinantes géneros literarios, desde la emotiva poesía hasta las cautivadoras historias en prosa."
      />

      <LessonSection
        title="Actividad Interactiva"
        content="¡Prepárate para emocionarte! Participa en nuestra actividad adivinando el autor de obras literarias clásicas y modernas."
      />

      <ResourceSection
        title="Recursos Adicionales"
        resources={[
          { text: 'Proyecto Gutenberg', url: 'https://www.gutenberg.org/' },
          { text: 'Poem Hunter', url: 'https://www.poemhunter.com/' },
        ]}
      />

      <PoemSection
        title="Ejemplo de Poesía"
        content="No te rindas, aún estás a tiempo\nde alcanzar y comenzar de nuevo,\naceptar tus sombras, enterrar tus miedos,\nliberar el lastre, retomar el vuelo.\n- Mario Benedetti"
      />

      <AssignmentSection
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
