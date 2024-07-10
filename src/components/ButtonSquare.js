import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ButtonSquare = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={styles.textStyle}>
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </Text>
      <Button
        title={`More ${color}`}
        onPress={onIncrease}
        styles={styles.buttonStyle}
      />
      <Button
        title={`Less ${color}`}
        onPress={onDecrease}
        styles={styles.buttonStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
})

export default ButtonSquare
