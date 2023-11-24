import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import LessonMatematic from '../LessonMatematic/LessonMatematic';
import ActivityMatetic from '../LessonMatematic/ActivityMatematic';
import ResourceMatematic from '../LessonMatematic/ResourceMatematic';
import ProblemMatematic from '../LessonMatematic/ProblemMatematic';
import AssignmentMatematic from '../LessonMatematic/AssignmentMatematic';

interface Props {
  navigation: any;
}

const ClassMatematica = ({ navigation }: Props): JSX.Element => {

  const handleTaskMatPress = () => {
    navigation.navigate('TaskMatematica');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Matemáticas!</Text>

      <LessonMatematic />
      <ActivityMatetic />
      <ResourceMatematic />
      <ProblemMatematic />
      <AssignmentMatematic onPress={handleTaskMatPress} />

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
