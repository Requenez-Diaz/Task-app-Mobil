// LessonSectionEnglish.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LessonSectionEnglishProps {
    // Propiedades específicas para LessonSectionEnglish
}

const LessonSectionEnglish: React.FC<LessonSectionEnglishProps> = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Lección 1: Gramática Básica</Text>
            <Text style={styles.lessonText}>
                Repasaremos conceptos de gramática básica, incluyendo verbos, sustantivos y adjetivos.
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

export default LessonSectionEnglish;
