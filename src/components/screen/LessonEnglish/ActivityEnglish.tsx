import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ActivitySectionEnglishProps {
    // Propiedades específicas para ActivityEnglish
}

const ActivityEnglish: React.FC<ActivitySectionEnglishProps> = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Actividad de Vocabulario</Text>
            <Text style={styles.activityText}>
                Amplía tu vocabulario participando en esta actividad interactiva de aprendizaje de nuevas palabras.
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

export default ActivityEnglish;
