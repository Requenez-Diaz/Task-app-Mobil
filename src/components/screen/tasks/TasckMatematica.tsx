import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TasckMatematica = () => {
    const [task, setTask] = useState<string>('');
    const [savedTasks, setSavedTasks] = useState<string[]>([]);
    const [editingTaskIndex, setEditingTaskIndex] = useState<number | null>(null);

    useEffect(() => {
        // Cargar tareas guardadas al cargar la vista
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
                    // Si estamos editando, actualizamos la tarea existente
                    const updatedTasks = [...savedTasks];
                    updatedTasks[editingTaskIndex] = task;
                    setSavedTasks(updatedTasks);
                    setEditingTaskIndex(null);
                } else {
                    // Si no estamos editando, agregamos una nueva tarea
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
        // Establecer la tarea para edición y mostrar en el campo de entrada
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
                    ¡Inspírate! Resuelve un problema matemático desafiante y comparte tu solución en el foro para explorar el fascinante mundo de las matemáticas.
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Tu Solución Matemática:</Text>
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

            {savedTasks.map((savedTask, index) => (
                <View key={index} style={styles.savedTaskContainer}>
                    <Text style={styles.savedTaskText}>{savedTask}</Text>
                    <TouchableOpacity style={styles.editButton} onPress={() => handleEditTask(index)}>
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTask(index)}>
                        <Text style={styles.buttonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

export default TasckMatematica;

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
    savedTaskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        marginTop: 10,
        elevation: 5,
    },
    savedTaskText: {
        fontSize: 18,
        color: '#333',
        flex: 1,
    },
    editButton: {
        backgroundColor: '#2ecc71',
        borderRadius: 5,
        padding: 8,
        marginLeft: 8,
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        borderRadius: 5,
        padding: 8,
        marginLeft: 8,
    },
    buttonText: {
        color: '#FFFFFF',
    },
});