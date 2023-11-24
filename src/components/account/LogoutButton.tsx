import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LogoutButtonProps {
    darkMode: boolean;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ darkMode }) => {
    return (
        <TouchableOpacity style={darkMode ? styles.logoutButtonDark : styles.logoutButtonLight}>
            <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    logoutButtonLight: {
        backgroundColor: '#4285f4',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    logoutButtonDark: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LogoutButton;
