import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LessonHistoria from '../LessonHistoria/LessonHistoria';
import BiographyHistoria from '../LessonHistoria/BiographyHistoria';
import ResourceHistoria from '../LessonHistoria/ResourceHistoria';
import QuestionHistoria from '../LessonHistoria/QuestionHistoria';
import ProjectHistoria from '../LessonHistoria/ProjectHistoria';

interface Props {
  navigation: any;
}

const ClassHistoria: React.FC<Props> = ({ navigation }) => {
  const handleTaskHistory = () => {
    navigation.navigate('TasckHistoria');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Historia!</Text>

      <LessonHistoria />
      <BiographyHistoria />
      <ResourceHistoria />
      <QuestionHistoria onPress={handleTaskHistory} />
      <ProjectHistoria />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default ClassHistoria;
