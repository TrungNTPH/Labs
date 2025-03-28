import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export default function lab3bai1() {

    const point = useSharedValue(0)

    const animateStyle = useAnimatedStyle(() => {
        return{
            transform:[{
                translateY: point.value
            }]
        }
    })

    const handleButton = () => {
        point.value = withTiming(Math.random() * 250,{duration: 400}) 
    }

  return (
    <View style={styles.container}>

        <Button title='Click' onPress={handleButton}></Button>

      <Animated.View style={[styles.box, animateStyle]}> </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
    }
})