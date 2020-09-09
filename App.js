import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {

  const renderList = () => {
    const names = [
      'Felipe',
      'Luísa',
      'Poliana',
      'Otávio',
      'Eliane',
      'Claudemir'
    ]

    const textElements = names.map(name => {
      return <Text key={name}>{name}</Text>
    })

    return textElements;
  }

  return (
    <View>
      <Header title="People" />
      <StatusBar style="auto" />
      {renderList()}
    </View>
  );
}

