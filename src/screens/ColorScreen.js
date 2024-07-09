import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
const ColorScreen = () => {
  const [color, setColor] = useState([])
  console.log(color)

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
  }
  const changeColor = () => {
    setColor([...color, randomColor()])
  }
  return (
    <View>
      <Button title="Add Color in square" onPress={() => changeColor()} />
      <View
        style={{ width: 100, height: 100, backgroundColor: randomColor() }}
      />
    </View>
  )
}

export default ColorScreen
