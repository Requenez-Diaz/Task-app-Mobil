import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ResourceSectionCiencia: React.FC = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Recursos Multimedia</Text>
            <Text style={styles.resourceText}>
                Amplía tus conocimientos con recursos multimedia, como documentales y videos educativos:
                {' '}
                <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL('https://www.nationalgeographic.com/')}>
                    National Geographic
                </Text>
                {' '}
                y
                {' '}
                <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL('https://www.khanacademy.org/science')}>
                    Khan Academy - Ciencia
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

export default ResourceSectionCiencia;
