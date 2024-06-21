import React from 'react'
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Components"
        onPress={() => console.log('press corrected')}
      />
      <TouchableOpacity
        onPress={() => console.log('press corrected')}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>Go to Components</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'blue',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 5,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
})

export default HomeScreen
