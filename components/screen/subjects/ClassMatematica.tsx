import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import LessonSection from '../LessonSectionMatematic/LessonSectionMatematic';
import ActivitySection from '../LessonSectionMatematic/ActivitySectionMatematic';
import ResourceSection from '../LessonSectionMatematic/ResourceSectionMatematic';
import AssignmentSection from '../LessonSectionMatematic/AssignmentSectionMatematic';
import ProblemSection from '../LessonSectionMatematic/ProblemSectionMatematic';

interface Props {
  navigation: any;
}

const ClassMatematica = ({ navigation }: Props): JSX.Element => {

  const handleTaskMatPress = () => {
    navigation.navigate('TasckMatematica');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Matemáticas!</Text>

      <LessonSection />
      <ActivitySection />
      <ResourceSection />
      <ProblemSection />
      <AssignmentSection onPress={handleTaskMatPress} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default ClassMatematica;
