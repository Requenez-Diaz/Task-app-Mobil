import React from 'react'
import {StyleSheet, View, Text } from 'react-native';
import TaskDisplay from './TaskDisplay';

export default function Menu() {
  return (
    <TaskDisplay/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
