import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
interface LessonSectionProps {
    title: string;
    content: string;
}

const Lessons: React.FC<LessonSectionProps> = ({ title, content }) => {
    return (
        <View style={styles.leassonContainer}>
            <Text style={styles.leassonTitle}>{title}</Text>
            <Text style={styles.lessonText}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    leassonContainer: {
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        elevation: 5,
    },
    leassonTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    lessonText: {
        fontSize: 18,
        marginBottom: 16,
        color: '#555',
    },
});

export default Lessons;