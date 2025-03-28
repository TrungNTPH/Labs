import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { runOnJS, runOnUI } from 'react-native-reanimated'

export default function Worklets() {

    const sayHelloFromJS = () => {
        console.log("Du lieu tu JS thread")
    }

    // worklet
    const sayHelloFromUI = () => {
        'worklet';
        console.log("Du lieu tu UI thread")
        runOnJS(sayHelloFromJS)()
    }

    // su kien an nut
    const handleButton = () => {
        runOnUI(sayHelloFromUI)() // chay worklet trong UI Thread
    }

  return (
    <View style={styles.container}>
      <Button title='Click on me' onPress={handleButton}></Button>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    }
})