// ResourceSection.tsx
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

interface ResourceSectionProps {
    title: string;
    resources: { text: string; url: string }[];
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ title, resources }) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {resources.map((resource, index) => (
                <Text key={index} style={styles.resourceText} onPress={() => Linking.openURL(resource.url)}>
                    {resource.text}
                </Text>
            ))}
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
        textDecorationLine: 'underline',
    },
});

export default ResourceSection;
