import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SongSectionEnglishProps {
    // Propiedades específicas para SongEnglish
}

const SongEnglish: React.FC<SongSectionEnglishProps> = () => {
    return (
        <View style={styles.songContainer}>
            <Text style={styles.sectionTitle}>Canción del Día</Text>
            <Text style={styles.songText}>
                Escucha una canción en inglés y analiza la letra para mejorar tu comprensión auditiva y vocabulario.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    songContainer: {
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
    songText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 16,
    },
});

export default SongEnglish;
