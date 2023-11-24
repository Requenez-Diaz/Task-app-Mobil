import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ResourceHistoria: React.FC = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Recursos de Investigación</Text>
            <Text style={styles.resourceText}>
                Utiliza recursos de investigación en línea para profundizar en temas específicos:
                {' '}
                <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL('https://www.britannica.com/')}>
                    Encyclopaedia Britannica
                </Text>
                {' '}
                y
                {' '}
                <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL('https://www.history.com/')}>
                    History.com
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

export default ResourceHistoria;
