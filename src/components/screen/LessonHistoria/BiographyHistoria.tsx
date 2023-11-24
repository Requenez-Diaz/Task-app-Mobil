import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BiographyHistoria: React.FC = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Biografía Destacada</Text>
            <Text style={styles.biographyText}>
                Descubre la vida de una figura histórica destacada y su impacto en la sociedad.
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
    biographyText: {
        fontSize: 18,
        marginBottom: 16,
        color: '#555',
    },
});

export default BiographyHistoria;
