import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TaskDisplay = () => {
    const [savedTasks, setSavedTasks] = useState<string[]>([]);

    useEffect(() => {
        retrieveSavedTasks();
    }, []);

    const retrieveSavedTasks = async () => {
        try {
            const savedTasksString = await AsyncStorage.getItem('savedTasks');
            if (savedTasksString) {
                setSavedTasks(JSON.parse(savedTasksString));
            }
        } catch (error) {
            console.error('Error al recuperar las tareas:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.sectionTitle}>Tareas Guardadas</Text>
            {savedTasks.map((savedTask, index) => (
                <View key={index} style={styles.savedTaskContainer}>
                    <Text style={styles.savedTaskText}>{savedTask}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#F8F8F8',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    savedTaskContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        marginTop: 10,
        elevation: 5,
    },
    savedTaskText: {
        fontSize: 18,
        color: '#333',
    },
});

export default TaskDisplay;
