import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ResourceSection = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Recursos en Línea</Text>
            <Text style={styles.resourceText}>
                Amplía tu conocimiento con recursos en línea como{' '}
                <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.khanacademy.org/')}>
                    Khan Academy
                </Text>{' '}
                y{' '}
                <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.mathway.com/')}>
                    Mathway
                </Text>
                .
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

export default ResourceSection;
