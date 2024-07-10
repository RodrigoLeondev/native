import React from 'react'
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hola, toca el botón</Text>
      <Button
        title="Go to Components"
        onPress={() => props.navigation.navigate('Components')}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('List')}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>Go to List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Image')}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>Go to Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Counter')}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>Go to Counter</Text>
      </TouchableOpacity>
      <Button
        title="Go to colors square"
        onPress={() => props.navigation.navigate('Colors')}
      />
      <Button
        title="Go to colors square"
        onPress={() => props.navigation.navigate('Square')}
      />
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
