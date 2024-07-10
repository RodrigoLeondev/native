import React, { useState } from 'react'
import { View, Button, FlatList } from 'react-native'
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
      <FlatList
        keyExtractor={(item) => item}
        data={color}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: item,
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 50,
              }}
            />
          )
        }}
      />
    </View>
  )
}

export default ColorScreen
