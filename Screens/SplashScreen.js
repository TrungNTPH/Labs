import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View>
        <Image style={styles.imageCard} source={{uri: "https://png.pngtree.com/thumb_back/fh260/background/20250121/pngtree-beautiful-mountains-mobile-wallpaper-image_16909767.jpg"}}></Image>
      <Text>SplashScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    imageCard: {
        width: 'auto',
        height: "100"
    }
})