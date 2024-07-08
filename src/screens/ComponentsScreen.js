import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ComponentsScreen() {
  return (
    <View>
      <Text style={styles.text}>A pretty botton</Text>
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
