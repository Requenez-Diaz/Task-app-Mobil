import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const ClassArte = () => {
  return (
    <ScrollView>

      <View style={styles.container}>
        <Text style={styles.headerText}>¡Bienvenido a la clase de Arte!</Text>

        <TouchableOpacity style={styles.card} onPress={() => { }}>
          <FontAwesome name="paint-brush" size={40} color="white" />
          <Text style={styles.cardTitle}>Explorando la Creatividad</Text>
          <Text style={styles.cardText}>
            Sumérgete en el mundo del arte y descubre diversas formas de expresión creativa.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => { }}>
          <FontAwesome name="pencil" size={40} color="white" />
          <Text style={styles.cardTitle}>Proyecto Artístico</Text>
          <Text style={styles.cardText}>
            Trabaja en un proyecto artístico basado en la técnica o estilo de un famoso artista.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://artsandculture.google.com/partner?hl=en')}>
          <FontAwesome name="globe" size={40} color="white" />
          <Text style={styles.cardTitle}>Recorrido Virtual a Museos</Text>
          <Text style={styles.cardText}>
            Realiza un recorrido virtual a través de museos de arte famosos en todo el mundo.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => { }}>
          <FontAwesome name="picture-o" size={40} color="white" />
          <Text style={styles.cardTitle}>Análisis de Obra de Arte</Text>
          <Text style={styles.cardText}>
            Analiza una obra de arte específica y comparte tus observaciones en el foro de la clase.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => { }}>
          <FontAwesome name="tasks" size={40} color="white" />
          <Text style={styles.cardTitle}>Tarea Creativa</Text>
          <Text style={styles.cardText}>
            Crea una obra de arte original inspirada en tus propias experiencias y emociones.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FDF6E3',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    color: 'white',
  },
  cardText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default ClassArte;
