import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';

interface Props {
  navigation: any;
}

const ClassLiteratura = ({ navigation }: Props):JSX.Element => {

  const handleTasckPress = () => {
    navigation.navigate('TasckLiteratura');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la clase de Literatura!</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Lección 1: Géneros Literarios</Text>
        <Text style={styles.lessonText}>
          Exploraremos los fascinantes géneros literarios, desde la emotiva poesía hasta las cautivadoras historias en prosa.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Actividad Interactiva</Text>
        <Text style={styles.activityText}>
          ¡Prepárate para emocionarte! Participa en nuestra actividad adivinando el autor de obras literarias clásicas y modernas.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recursos Adicionales</Text>
        <Text style={styles.resourceText}>
          Sumérgete en el mundo literario con recursos recomendados como el
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.gutenberg.org/')}>
            Proyecto Gutenberg
          </Text>
          {' '}
          y
          {' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://www.poemhunter.com/')}>
            Poem Hunter
          </Text>.
        </Text>
      </View>

      <View style={styles.poemContainer}>
        <Text style={styles.sectionTitle}>Ejemplo de Poesía</Text>
        <Text style={styles.poemText}>
          "No te rindas, aún estás a tiempo
          de alcanzar y comenzar de nuevo,
          aceptar tus sombras, enterrar tus miedos,
          liberar el lastre, retomar el vuelo."
          - Mario Benedetti
        </Text>
      </View>

      <TouchableOpacity onPress={handleTasckPress}>
        <View style={styles.assignmentContainer}>
          <Text style={styles.sectionTitle}>Tarea Creativa</Text>
          <Text style={styles.assignmentText}>
            ¡Inspírate! Escribe tu propio poema o relato corto y compártelo en el foro para sumergirte en el mundo de la creatividad literaria.
          </Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F8F8',
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
  activityText: {
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
  poemContainer: {
    marginBottom: 20,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 16,
  },
  poemText: {
    fontSize: 18,
    color: '#333',
    whiteSpace: 'pre-line',
  },
  assignmentContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 16,
    elevation: 5,
  },
  assignmentText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default ClassLiteratura;
