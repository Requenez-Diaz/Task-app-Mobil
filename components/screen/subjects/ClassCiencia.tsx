import React from 'react';
import { ScrollView, StyleSheet, Text, } from 'react-native';
import LessonCiencia from '../LeassonCiencia/LeassonCiencia';
import ActivityCiencia from '../LeassonCiencia/ActivityCiencia';
import ResourceCiencia from '../LeassonCiencia/ResourceCiencia';
import QuestionCiencia from '../LeassonCiencia/QuestionCiencia';
import ProjectCiencia from '../LeassonCiencia/ProjectCiencia';

interface Props {
  navigation: any;
}

const ClassCiencia: React.FC<Props> = ({ navigation }) => {
  const handleTaskCience = () => {
    navigation.navigate('TaskCiencia');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Ciencia!</Text>

      <LessonCiencia />
      <ActivityCiencia />
      <ResourceCiencia />
      <QuestionCiencia onPress={handleTaskCience} />
      <ProjectCiencia />

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
});

export default ClassCiencia;
