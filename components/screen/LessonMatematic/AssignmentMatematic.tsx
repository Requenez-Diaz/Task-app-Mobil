import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    onPress: () => void;
}

const AssignmentMatematic = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.assignmentContainer}>
                <Text style={styles.sectionTitle}>Tarea: Problemas de Desafío</Text>
                <Text style={styles.assignmentText}>
                    Aborda los problemas de desafío proporcionados y comparte tus soluciones en el foro de la clase.
                </Text>
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

export default AssignmentMatematic;
