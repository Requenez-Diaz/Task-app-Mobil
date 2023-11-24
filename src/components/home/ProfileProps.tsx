import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Profile from './Profile';

const ProfileProps = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  //obtener la imagen de async storage
  const loadProfileImage = async () => {
    try {
      const imageUri = await AsyncStorage.getItem('profileImage');
      if (imageUri) {
        setProfileImage(imageUri);
      }
    } catch (error) {
      console.error('Error @loadProfileImage:', error);
    }
  };
  //obtener el modo oscuro de async storage
  const loadDarkMode = async () => {
    try {
      const darkMode = await AsyncStorage.getItem('darkMode');
      if (darkMode) {
        setDarkMode(JSON.parse(darkMode));
      }
    } catch (error) {
      console.error('Error @loadDarkMode:', error);
    }
  };

  useEffect(() => {
    loadProfileImage();
    loadDarkMode();
  }, []);
  return (
    <View>
      
      <Profile
        imageUri={profileImage}
        darkMode={darkMode}
        name="Jorge"
      />
    </View>
  );
};

export default ProfileProps;

const styles = StyleSheet.create({});


