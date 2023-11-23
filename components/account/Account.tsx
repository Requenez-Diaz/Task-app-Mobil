import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

import ProfileImage from './ProfileImage';
import UserDetails from './UserDetails';
import Settings from './Settings';
import LogoutButton from './LogoutButton';

const Account: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [name, setName] = useState('Elliam Sánchez');
    const [email, setEmail] = useState('elliamsanchez510@gmail.com');
    const [profileImage, setProfileImage] = useState<string | null>(null);

    useEffect(() => {
        loadProfileImage();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Implementar el cambio al modo oscuro aquí
    };

    const onNameChange = (text: string) => {
        setName(text);
    };

    const onEmailChange = (text: string) => {
        setEmail(text);
    };

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                const imageUri = result.uri;
                saveProfileImage(imageUri);
            }
        } catch (error) {
            console.error('Error picking image:', error);
            Alert.alert('Error', 'Hubo un error al seleccionar la imagen.');
        }
    };

    const saveProfileImage = async (uri: string) => {
        try {
            await AsyncStorage.setItem('profileImage', uri);
            setProfileImage(uri);
        } catch (error) {
            console.error('Error saving profile image:', error);
            Alert.alert('Error', 'Hubo un error al guardar la imagen.');
        }
    };

    const loadProfileImage = async () => {
        try {
            const uri = await AsyncStorage.getItem('profileImage');
            if (uri) {
                setProfileImage(uri);
            }
        } catch (error) {
            console.error('Error loading profile image:', error);
        }
    };

    return (
        <ScrollView style={darkMode ? styles.containerDark : styles.containerLight}>
            <ProfileImage imageUri={profileImage} darkMode={darkMode} onPress={pickImage} />
            <UserDetails name={name} email={email} darkMode={darkMode} onNameChange={onNameChange} onEmailChange={onEmailChange} />
            <Settings darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
            <LogoutButton darkMode={darkMode} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#121212',
    },
});

export default Account;
