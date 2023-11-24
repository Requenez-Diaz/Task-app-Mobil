import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AddUsersProps {
  nameI: string;
  img?: { uri: string };
}

const AddUsersProps: React.FC<AddUsersProps> = ({
  nameI,
  img,
}: AddUsersProps) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleFollow = async () => {
    try {
      const savedUsers = await AsyncStorage.getItem("followedUsers");
      const followedUsers = savedUsers ? JSON.parse(savedUsers) : [];

      const userIndex = followedUsers.findIndex(
        (user: any) => user.name === nameI
      );

      if (userIndex === -1) {
        followedUsers.push({ name: nameI });
        setIsFollowed(true);
      } else {
        followedUsers.splice(userIndex, 1);
        setIsFollowed(false);
      }

      await AsyncStorage.setItem(
        "followedUsers",
        JSON.stringify(followedUsers)
      );
    } catch (error) {
      console.error("Error manipulating AsyncStorage:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const savedUsers = await AsyncStorage.getItem("followedUsers");
      const followedUsers = savedUsers ? JSON.parse(savedUsers) : [];

      const userIndex = followedUsers.findIndex(
        (user: any) => user.name === nameI
      );

      if (userIndex !== -1) {
        followedUsers.splice(userIndex, 1);
        setDeleted(true);
      }

      await AsyncStorage.setItem(
        "followedUsers",
        JSON.stringify(followedUsers)
      );

      setDeleted(false);
    } catch (error) {
      console.error("Error manipulating AsyncStorage:", error);
    }
  };

  useEffect(() => {
    const checkFollowStatus = async () => {
      try {
        const savedUsers = await AsyncStorage.getItem("followedUsers");
        const followedUsers = savedUsers ? JSON.parse(savedUsers) : [];

        const userIndex = followedUsers.findIndex(
          (user: any) => user.name === nameI
        );

        if (userIndex !== -1) {
          setIsFollowed(true);
        }
      } catch (error) {
        console.error("Error checking follow status:", error);
      }
    };

    checkFollowStatus();
  }, [nameI]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          {img && <Image style={styles.image} source={img} />}
          <View style={styles.textContainer}>
            <Text style={styles.name}>{nameI}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={handleFollow} style={styles.icon}>
              <AntDesign
                name={isFollowed ? "check" : "adduser"}
                size={24}
                color={isFollowed ? "green" : "black"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <SimpleLineIcons name='user-following' size={24} color='blue' />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <MaterialIcons
                name={deleted ? "undo" : "delete-forever"}
                size={24}
                color={deleted ? "black" : "red"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 2,
    margin: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    marginLeft: 10,
  },
});

export default AddUsersProps;
