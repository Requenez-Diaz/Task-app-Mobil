import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProjectHistoria: React.FC = () => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <View style={styles.projectContainer}>
                <Text style={styles.sectionTitle}>Proyecto de Investigación</Text>
                <Text style={styles.projectText}>
                    Trabaja en un proyecto de investigación sobre un período histórico de tu interés y presenta tus hallazgos a la clase.
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

export default ProjectHistoria;
