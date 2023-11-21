import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface QuestionSectionProps {
    onPress: () => void;
}

const QuestionCiencia: React.FC<QuestionSectionProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.questionContainer}>
                <Text style={styles.sectionTitle}>Pregunta del Día</Text>
                <Text style={styles.questionText}>
                    Reflexiona sobre la pregunta del día y comparte tus ideas en el foro de la clase.
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    questionContainer: {
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
    questionText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 16,
    },
});

export default QuestionCiencia;
