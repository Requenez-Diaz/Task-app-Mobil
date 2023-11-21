import React from 'react';
import { StyleSheet, Text } from 'react-native';

const HeaderArte: React.FC = () => (
    <Text style={styles.headerText}>¡Bienvenido a la clase de Arte!</Text>
);

const styles = StyleSheet.create({
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
});

export default HeaderArte;
