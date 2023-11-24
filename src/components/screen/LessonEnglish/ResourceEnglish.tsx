import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

interface ResourceSectionEnglishProps {
    // Propiedades específicas para ResourceEnglish
}

const ResourceEnglish: React.FC<ResourceSectionEnglishProps> = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Recursos de Lectura</Text>
            <Text style={styles.resourceText}>
                Descubre nuevas historias y autores con recursos de lectura recomendados:
                {' '}
                <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL('https://www.projectgutenberg.org/')}>
                    Project Gutenberg
                </Text>
                {' '}
                y
                {' '}
                <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL('https://www.goodreads.com/')}>
                    Goodreads
                </Text>
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
    resourceText: {
        fontSize: 18,
        marginBottom: 16,
        color: '#555',
    },
    linkText: {
        color: '#4285F4',
        textDecorationLine: 'underline',
    },
});

export default ResourceEnglish;
