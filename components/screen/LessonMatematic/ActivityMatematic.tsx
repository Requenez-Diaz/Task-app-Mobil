import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivityMatetic = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Ejercicio Práctico: Suma y Resta</Text>
            <Text style={styles.activityText}>
                Mejora tus habilidades con ejercicios prácticos de suma y resta de números.
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
    activityText: {
        fontSize: 18,
        marginBottom: 16,
        color: '#555',
    },
});

export default ActivityMatetic;
