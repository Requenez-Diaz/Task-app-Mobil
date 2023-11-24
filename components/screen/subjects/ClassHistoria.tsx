import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Lessons from '../../Leassons/Lessons';
import Resources from '../../Leassons/Resource';
import Assignment from '../../Leassons/Assigment';
import Example from '../../Leassons/Example';

interface Props {
  navigation: any;
}

const ClassHistoria: React.FC<Props> = ({ navigation }) => {
  const handleTaskHistory = () => {
    navigation.navigate('TaskHistoria');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Historia!</Text>

      <Lessons
        title="Un Viaje en el Tiempo"
        content="Exploraremos eventos históricos clave que han dado forma al mundo en el que vivimos."
      />

      <Lessons
        title="Biografía Destacada"
        content="Descubre la vida de una figura histórica destacada y su impacto en la sociedad."
      />

      <Resources
        title="Recursos de Investigación"
        resources={[
          { text: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/' },
          { text: 'History.com', url: 'https://www.history.com/' },
        ]}
      />

      <Example
        title="Proyecto de Investigación"
        content="Trabaja en un proyecto de investigación sobre un período histórico de tu interés y presenta tus hallazgos a la clase."
      />

      <Assignment
        title="Pregunta Reflexiva"
        content="Reflexiona sobre la pregunta del día y comparte tus pensamientos en el foro de la clase."
        onPress={handleTaskHistory}
      />

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
