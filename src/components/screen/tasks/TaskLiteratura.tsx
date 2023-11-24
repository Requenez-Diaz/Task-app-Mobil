// TaskLiteratura.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskList from '../TaskList/TaskList';


const TaskLiteratura = () => {
    const [task, setTask] = useState<string>('');
    const [savedTasks, setSavedTasks] = useState<string[]>([]);
    const [editingTaskIndex, setEditingTaskIndex] = useState<number | null>(null);

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

    const handleSaveTask = async () => {
        if (task) {
            try {
                if (editingTaskIndex !== null) {
                    const updatedTasks = [...savedTasks];
                    updatedTasks[editingTaskIndex] = task;
                    setSavedTasks(updatedTasks);
                    setEditingTaskIndex(null);
                } else {
                    const updatedTasks = [...savedTasks, task];
                    setSavedTasks(updatedTasks);
                }

                await AsyncStorage.setItem('savedTasks', JSON.stringify(savedTasks));
                setTask('');
            } catch (error) {
                console.error('Error al guardar la tarea:', error);
            }
        }
    };

    const handleEditTask = (index: number) => {
        setEditingTaskIndex(index);
        setTask(savedTasks[index]);
    };

    const handleDeleteTask = async (index: number) => {
        try {
            const updatedTasks = savedTasks.filter((_, i) => i !== index);
            setSavedTasks(updatedTasks);
            await AsyncStorage.setItem('savedTasks', JSON.stringify(updatedTasks));
            setEditingTaskIndex(null);
            setTask('');
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.welcomeText}>¡Bienvenido a la tarea creativa!</Text>

            <View style={styles.taskContainer}>
                <Text style={styles.sectionTitle}>Tarea Creativa</Text>
                <Text style={styles.taskDescription}>
                    ¡Inspírate! Escribe tu propio poema o relato corto y compártelo en el foro para sumergirte en el mundo de la creatividad literaria.
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Tu Poema o Relato Corto:</Text>
                <TextInput
                    multiline
                    style={styles.input}
                    placeholder="Escribe aquí..."
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
                <Text style={styles.buttonText}>{editingTaskIndex !== null ? 'Actualizar Tarea' : 'Guardar Tarea'}</Text>
            </TouchableOpacity>

            <TaskList
                savedTasks={savedTasks}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#F8F8F8',
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    taskContainer: {
        marginBottom: 20,
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
    taskDescription: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 18,
        marginBottom: 8,
        color: '#333',
    },
    input: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        fontSize: 16,
        color: '#333',
    },
    saveButton: {
        backgroundColor: '#3498db',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
    },
});

export default TaskLiteratura;
