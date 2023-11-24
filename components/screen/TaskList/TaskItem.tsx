// TaskItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, } from '@expo/vector-icons';

interface TaskItemProps {
    task: string;
    onEdit: () => void;
    onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    return (
        <View style={styles.savedTaskContainer}>
            <Text style={styles.savedTaskText}>{task}</Text>
            <TouchableOpacity style={styles.editButton} onPress={onEdit}>
                <AntDesign name="edit" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <AntDesign name="delete" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default TaskItem;
