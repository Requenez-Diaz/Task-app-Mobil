import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProblemSection = () => {
    return (
        <View style={styles.problemContainer}>
            <Text style={styles.sectionTitle}>Problema del Día</Text>
            <Text style={styles.problemText}>
                Resuelve el siguiente problema matemático: ¿Cuál es el área de un triángulo con base 8 y altura 12?
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    problemContainer: {
        marginBottom: 20,
        backgroundColor: '#FFD700',
        borderRadius: 10,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    problemText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 16,
    },
});

export default ProblemSection;
