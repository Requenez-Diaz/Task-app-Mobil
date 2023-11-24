import React from 'react';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import HeaderArte from '../../Leassons/LessonArte/HeaderArte';
import CardArte from '../../Leassons/LessonArte/CardArte';

interface Props {
  navigation: any;
}

const ClassArte: React.FC<Props> = ({ navigation }) => {
  const handleGaleriaArte = () => {
    navigation.navigate('GaleriaArte');
  };

  const cards = [
    {
      title: 'Explorando la Creatividad',
      text: 'Sumérgete en el mundo del arte y descubre diversas formas de expresión creativa.',
      icon: 'paint-brush',
      onPress: () => {},
    },
    {
      title: 'Proyecto Artístico',
      text: 'Trabaja en un proyecto artístico basado en la técnica o estilo de un famoso artista.',
      icon: 'pencil',
      onPress: () => {},
    },
    {
      title: 'Recorrido Virtual a Museos',
      text: 'Realiza un recorrido virtual a través de museos de arte famosos en todo el mundo.',
      icon: 'globe',
      onPress: () => Linking.openURL('https://artsandculture.google.com/partner?hl=en'),
    },
    {
      title: 'Análisis de Obra de Arte',
      text: 'Analiza una obra de arte específica y comparte tus observaciones en el foro de la clase.',
      icon: 'picture-o',
      onPress: () => {},
    },
    {
      title: 'Tarea Creativa',
      text: 'Crea una obra de arte original inspirada en tus propias experiencias y emociones.',
      icon: 'tasks',
      onPress: handleGaleriaArte,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderArte />
        {cards.map((card, index) => (
          <CardArte key={index} {...card} />
        ))}
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
});

export default ClassArte;
