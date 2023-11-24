import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

interface NotificationSettingsProps {
    receiveNotifications: boolean;
    onToggleNotifications: () => void;
}

const Notification: React.FC<NotificationSettingsProps> = ({ receiveNotifications, onToggleNotifications }) => {
    return (
        <View style={styles.settingItem}>
            <Text style={styles.settingText}>Recibir Notificaciones</Text>
            <Switch value={receiveNotifications} onValueChange={onToggleNotifications} />
        </View>
    );
};

const styles = StyleSheet.create({
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    settingText: {
        fontSize: 18,
        color: '#333333',
    },
});

export default Notification;
