import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PoemSectionProps {
    title: string;
    content: string;
}

const Example: React.FC<PoemSectionProps> = ({ title, content }) => {
    return (
        <View style={styles.exampleContainer}>
            <Text style={styles.exampleTitle}>{title}</Text>
            <Text style={styles.exampleText}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    exampleContainer: {
        marginBottom: 20,
        backgroundColor: '#FFD700',
        borderRadius: 10,
        padding: 16,
    },
    exampleTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    exampleText: {
        fontSize: 18,
        color: '#333',
    },
});

export default Example;
