// PoemSection.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PoemSectionProps {
    title: string;
    content: string;
}

const PoemSection: React.FC<PoemSectionProps> = ({ title, content }) => {
    return (
        <View style={styles.poemContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.poemText}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    poemContainer: {
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
    poemText: {
        fontSize: 18,
        color: '#333',
    },
});

export default PoemSection;
