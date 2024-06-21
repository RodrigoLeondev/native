import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ComponentsScreen() {
  return (
    <View>
      <Text style={styles.text}>Components</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    textAlign: 'center',
    color: 'blue',
  },
})
