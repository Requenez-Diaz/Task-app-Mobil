import React from 'react';
import { ScrollView, StyleSheet, Text, } from 'react-native';
import LessonEnglish from '../LessonEnglish/LessonEnglish';
import ActivityEnglish from '../LessonEnglish/ActivityEnglish';
import ResourceEnglish from '../LessonEnglish/ResourceEnglish';
import SongEnglish from '../LessonEnglish/SongEnglish';
import AssignmentLiteratura from '../LessonLiteratura/AssignmentLiteratura';

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

      <LessonEnglish />
      <ActivityEnglish />
      <ResourceEnglish />
      <SongEnglish />
      <AssignmentLiteratura
        title="Tarea: Escritura Creativa"
        content="Escribe un breve párrafo sobre tu tema favorito y compártelo con tus compañeros en el foro de la clase."
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
