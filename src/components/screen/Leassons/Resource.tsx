import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

interface ResourceSectionProps {
    title: string;
    resources: { text: string; url: string }[];
}

const Resources: React.FC<ResourceSectionProps> = ({ title, resources }) => {
    return (
        <View style={styles.resourceContainer}>
            <Text style={styles.resourceTitle}>{title}</Text>
            {resources.map((resource, index) => (
                <Text key={index} style={styles.resourceText} onPress={() => Linking.openURL(resource.url)}>
                    {resource.text}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    resourceContainer: {
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        elevation: 5,
    },
    resourceTitle: {
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

export default Resources;
