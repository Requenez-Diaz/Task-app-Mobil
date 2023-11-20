import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from "@expo/vector-icons";

const GaleriaArte = () => {
    const [artworks, setArtworks] = useState<string[]>([]);
    const [selectedArtworkIndex, setSelectedArtworkIndex] = useState<number | null>(null);

    useEffect(() => {
        // Cargar obras de arte guardadas al cargar la vista
        retrieveArtworks();
    }, []);

    const retrieveArtworks = async () => {
        try {
            const savedArtworksString = await AsyncStorage.getItem('savedArtworksArte');
            if (savedArtworksString) {
                setArtworks(JSON.parse(savedArtworksString));
            }
        } catch (error) {
            console.error('Error al recuperar las obras de arte:', error);
        }
    };

    const handleSelectArtwork = (index: number) => {
        // Mostrar la obra de arte seleccionada en pantalla completa
        setSelectedArtworkIndex(index);
    };

    const handleCloseArtwork = () => {
        // Cerrar la visualización de la obra de arte
        setSelectedArtworkIndex(null);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.headerText}>¡Explora la Galería de Arte!</Text>

            {artworks.map((artwork, index) => (
                <TouchableOpacity key={index} style={styles.artworkCard} onPress={() => handleSelectArtwork(index)}>
                    <Image source={{ uri: artwork }} style={styles.artworkImage} />
                </TouchableOpacity>
            ))}

            {selectedArtworkIndex !== null && (
                <View style={styles.selectedArtworkContainer}>
                    <Image source={{ uri: artworks[selectedArtworkIndex] }} style={styles.selectedArtworkImage} />
                    <TouchableOpacity style={styles.closeButton} onPress={handleCloseArtwork}>
                        <FontAwesome name="times" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    );
};

export default GaleriaArte;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FDF6E3',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    artworkCard: {
        backgroundColor: '#3498db',
        borderRadius: 10,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 5,
    },
    artworkImage: {
        height: 200,
        resizeMode: 'cover',
    },
    selectedArtworkContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedArtworkImage: {
        height: '80%',
        width: '80%',
        resizeMode: 'contain',
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
});