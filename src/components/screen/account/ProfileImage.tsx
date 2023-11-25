import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ProfileImageProps {
    imageUri: string | null;
    darkMode: boolean;
    onPress: () => void;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageUri, darkMode, onPress }) => {
    return (
        <View style={styles.profileContainer}>
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.profileImage} />
            ) : (
                <MaterialCommunityIcons
                    name="account-circle"
                    size={120}
                    color={darkMode ? '#ffffff' : '#333333'}
                />
            )}
            <TouchableOpacity onPress={onPress} style={styles.changeImageButton}>
                <Text style={darkMode ? styles.changeImageTextDark : styles.changeImageTextLight}>
                    Cambiar Imagen
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    changeImageButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    changeImageTextLight: {
        color: '#4285f4',
        fontSize: 16,
    },
    changeImageTextDark: {
        color: '#4CAF50',
        fontSize: 16,
    },
});

export default ProfileImage;
