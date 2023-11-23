import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';

interface Props {
  navigation: any;
}

const ClassHistoria = ({ navigation }:Props):JSX.Element => {

  const handleTasckHistory = () => {
    navigation.navigate('TasckHistoria');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Historia!</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Un Viaje en el Tiempo</Text>
        <Text style={styles.lessonText}>
          Exploraremos eventos históricos clave que han dado forma al mundo en el que vivimos.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Biografía Destacada</Text>
        <Text style={styles.biographyText}>
          Descubre la vida de una figura histórica destacada y su impacto en la sociedad.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recursos de Investigación</Text>
        <Text style={styles.resourceText}>
          Utiliza recursos de investigación en línea para profundizar en temas específicos:
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.britannica.com/')}>
            Encyclopaedia Britannica
          </Text>
          {' '}
          y
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.history.com/')}>
            History.com
          </Text>
        </Text>
      </View>

      <TouchableOpacity onPress={handleTasckHistory}>
        <View style={styles.questionContainer}>
          <Text style={styles.sectionTitle}>Pregunta Reflexiva</Text>
          <Text style={styles.questionText}>
            Reflexiona sobre la pregunta del día y comparte tus pensamientos en el foro de la clase.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.projectContainer}>
          <Text style={styles.sectionTitle}>Proyecto de Investigación</Text>
          <Text style={styles.projectText}>
            Trabaja en un proyecto de investigación sobre un período histórico de tu interés y presenta tus hallazgos a la clase.
          </Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default ClassHistoria;

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
  sectionContainer: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  lessonText: {
    fontSize: 18,
    marginBottom: 16,
    color: '#555',
  },
  biographyText: {
    fontSize: 18,
    marginBottom: 16,
    color: '#555',
  },
  resourceText: {
    fontSize: 18,
    marginBottom: 16,
    color: '#555',
  },
  linkText: {
    color: '#4285F4',
    textDecorationLine: 'underline',
  },
  questionContainer: {
    marginBottom: 20,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 16,
  },
  questionText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  projectContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 16,
    elevation: 5,
  },
  projectText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});