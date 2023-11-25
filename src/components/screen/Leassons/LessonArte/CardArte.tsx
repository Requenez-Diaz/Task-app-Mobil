import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface CardProps {
    title: string;
    text: string;
    icon: string;
    onPress: () => void;
}

const CardArte: React.FC<CardProps> = ({ title, text, icon, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <FontAwesome name={icon} size={40} color="white" />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#3498db',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'column',
        alignItems: 'center',
        elevation: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 8,
        color: 'white',
    },
    cardText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});

export default CardArte;
