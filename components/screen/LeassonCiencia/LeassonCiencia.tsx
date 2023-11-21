import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LessonCiencia: React.FC = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Lección 1: Introducción a la Ciencia</Text>
            <Text style={styles.lessonText}>
                Exploraremos los principios fundamentales de la ciencia y su importancia en la comprensión del mundo natural.
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

export default LessonCiencia;
