import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

interface SettingsProps {
    darkMode: boolean;
    onToggleDarkMode: () => void;
}

const Settings: React.FC<SettingsProps> = ({ darkMode, onToggleDarkMode }) => {
    return (
        <View style={styles.settingsContainer}>
            <View style={styles.settingItem}>
                <Text style={darkMode ? styles.settingTextDark : styles.settingTextLight}>Modo Oscuro</Text>
                <Switch value={darkMode} onValueChange={onToggleDarkMode} />
            </View>
            {/* Agrega más configuraciones relevantes aquí */}
        </View>
    );
};

const styles = StyleSheet.create({
    settingsContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    settingTextLight: {
        fontSize: 18,
        color: '#333333',
    },
    settingTextDark: {
        fontSize: 18,
        color: '#ffffff',
    },
});

export default Settings;
