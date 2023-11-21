import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProjectCiencia: React.FC = () => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <View style={styles.projectContainer}>
                <Text style={styles.sectionTitle}>Proyecto Final</Text>
                <Text style={styles.projectText}>
                    Trabaja en un proyecto final relacionado con un tema de ciencia de tu elección y presenta tus hallazgos a la clase.
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    projectContainer: {
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
    projectText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
});

export default ProjectCiencia;
