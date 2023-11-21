import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LessonHistoria: React.FC = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Un Viaje en el Tiempo</Text>
            <Text style={styles.lessonText}>
                Exploraremos eventos históricos clave que han dado forma al mundo en el que vivimos.
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

export default LessonHistoria;
