import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AssignmentSectionProps {
    title: string;
    content: string;
    onPress?: () => void;
}

const AssignmentSectionEnglish: React.FC<AssignmentSectionProps> = ({ title, content, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.assignmentContainer}>
                <Text style={styles.sectionTitle}>{title}</Text>
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
    sectionTitle: {
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

export default AssignmentSectionEnglish;
