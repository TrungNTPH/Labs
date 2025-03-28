import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

export default function MoveBox() {

    const offset = useSharedValue(0) // luu gia tri cho vi tri cua box
    const offset2 = useSharedValue(0) // luu gia tri cho vi tri cua box
    const opacity = useSharedValue(1)
    const scale = useSharedValue(1)

    const  animateStyle = useAnimatedStyle(() => {
        return{
            transform: [{translateY: offset.value},
                { translateX: offset2.value},
                {scale: scale.value}
            ],
            opacity: opacity.value
        };
    }) 

    const handleButton = () => {
        offset.value = Math.random() * 255
        offset2.value = Math.random() * 255
        offset.value = withTiming(Math.random() * 255, {duration: 500})
        offset2.value = withTiming(Math.random() * 255, {duration: 500})
        scale.value = withTiming(scale.value === 1 ? 1.5 : 1, { duration: 500 });
    }

  return (
    <View style={styles.container}>

        <Animated.View style={[styles.box, animateStyle]}></Animated.View>
      <Button title='Click' onPress={handleButton}></Button>
      
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
        backgroundColor: "red",
        borderRadius: 100
    }
})