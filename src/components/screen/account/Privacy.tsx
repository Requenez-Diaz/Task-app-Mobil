import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

interface PrivacySettingsProps {
    privateAccount: boolean;
    onTogglePrivacy: () => void;
}

const Privacy: React.FC<PrivacySettingsProps> = ({ privateAccount, onTogglePrivacy }) => {
    return (
        <View style={styles.settingItem}>
            <Text style={styles.settingText}>Cuenta Privada</Text>
            <Switch value={privateAccount} onValueChange={onTogglePrivacy} />
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

export default Privacy;
