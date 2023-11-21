import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LessonSection = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Lección 1: Números y Operaciones</Text>
            <Text style={styles.lessonText}>
                Descubre los fascinantes conceptos de números naturales, enteros, fracciones y operaciones básicas.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default LessonSection;
