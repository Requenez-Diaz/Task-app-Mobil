import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AssignmentSectionProps {
    title: string;
    content: string;
    onPress: () => void;
}

const Assignment: React.FC<AssignmentSectionProps> = ({ title, content, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.assignmentContainer}>
                <Text style={styles.assignmentTitle}>{title}</Text>
                <Text style={styles.assignmentText}>{content}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    assignmentContainer: {
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        padding: 16,
        elevation: 5,
    },
    assignmentTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#FFFFFF',
    },
    assignmentText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
});

export default Assignment;
