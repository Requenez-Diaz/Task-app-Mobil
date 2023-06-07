import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style ={styles.profile}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    profile : {
        display: 'flex',
        width: '90%',
        height: 60,
        backgroundColor: 'blue',
        alignItems: 'center'
    }
})