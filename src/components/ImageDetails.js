import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ImageDetails = (props) => {
  return (
    <View>
      <Image source={props.imageSource} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  )
}

styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  imageStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
})

export default ImageDetails
