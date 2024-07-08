import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
  const [count, setCount] = useState(0)
  const counterIncrement = () => {
    setCount(count + 1)
  }
  const counterDecrement = () => {
    setCount(count - 1)
  }

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          counterIncrement()
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          counterDecrement()
        }}
      ></Button>
      <Text style={styles.textStyle}>Counter Screen {count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
  },
  buttonStyle: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 5,
  },
})

export default CounterScreen
