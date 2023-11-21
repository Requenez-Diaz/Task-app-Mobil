import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LessonCiencia from '../LeassonCiencia/LeassonCiencia';
import ActivitySectionCiencia from '../LeassonCiencia/ActivityCiencia';
import ResourceSectionCiencia from '../LeassonCiencia/Resource';
import QuestionSectionCiencia from '../LeassonCiencia/QuestionCiencia';
import ProjectSectionCiencia from '../LeassonCiencia/Project';

interface Props {
  navigation: any;
}

const ClassCiencia: React.FC<Props> = ({ navigation }) => {
  const handleTaskCience = () => {
    navigation.navigate('TasckCiencia');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Ciencia!</Text>

      <LessonCiencia />
      <ActivitySectionCiencia />
      <ResourceSectionCiencia />
      <QuestionSectionCiencia onPress={handleTaskCience} />
      <ProjectSectionCiencia />

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
