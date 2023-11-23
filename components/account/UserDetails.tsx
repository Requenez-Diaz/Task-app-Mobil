import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface UserDetailsProps {
    name: string;
    email: string;
    darkMode: boolean;
    onNameChange: (text: string) => void;
    onEmailChange: (text: string) => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ name, email, darkMode, onNameChange, onEmailChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={darkMode ? styles.inputFieldDark : styles.inputFieldLight}
                placeholder="Nombre"
                value={name}
                onChangeText={onNameChange}
            />
            <TextInput
                style={darkMode ? styles.inputFieldDark : styles.inputFieldLight}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={onEmailChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    inputFieldLight: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    inputFieldDark: {
        backgroundColor: '#333333',
        color: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
});

export default UserDetails;
