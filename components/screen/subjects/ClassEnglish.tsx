import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LessonSectionEnglish from '../LessonSectionEnglish/LessonSectionEnglish';
import ActivitySectionEnglish from '../LessonSectionEnglish/ActivitySectionEnglish';
import ResourceSectionEnglish from '../LessonSectionEnglish/ResourceSectionEnglish';
import SongSectionEnglish from '../LessonSectionEnglish/SongSectionEnglish';
import AssignmentSectionEnglish from '../LessonSectionMatematic/SongSectionMatematic';


interface Props {
  navigation: any;
}

const ClassEnglish: React.FC<Props> = ({ navigation }) => {
  const handleTaskEnglish = () => {
    navigation.navigate('TasckEnglish');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Inglés!</Text>

      <LessonSectionEnglish />
      <ActivitySectionEnglish />
      <ResourceSectionEnglish />
      <SongSectionEnglish />
      <AssignmentSectionEnglish
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
