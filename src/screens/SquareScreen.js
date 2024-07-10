import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ButtonSquare from '../components/ButtonSquare'

const COLOR_INCREMENT = 20

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  console.log(red, green, blue)

  return (
    <View>
      <ButtonSquare
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color="red"
      />
      <ButtonSquare
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="green"
      />
      <ButtonSquare
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="blue"
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 50,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
