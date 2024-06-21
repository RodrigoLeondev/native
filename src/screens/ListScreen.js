import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 27 },
    { name: 'Friend #5', age: 33 },
    { name: 'Friend #6', age: 26 },
    { name: 'Friend #7', age: 29 },
    { name: 'Friend #8', age: 22 },
    { name: 'Friend #9', age: 24 },
    { name: 'Friend #10', age: 31 },
  ]
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element => item => name: 'Friend #1' Para no escribir element.item.name
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
})

export default ListScreen
