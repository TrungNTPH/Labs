import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function GestureTest() {

    const clicked = useSharedValue(false);

    const animateStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: clicked.value ? withTiming('tomato') : withTiming('blue'),
            transform: [{ scale: clicked.value ? withTiming(1) : withTiming(2) }]
        }
    })

    const clickGesture = Gesture.Tap()
        .onBegin(() => {
            clicked.value = !clicked.value
        })
        ;


    return (
        <GestureHandlerRootView >
            <View style={styles.container}>
                <GestureDetector gesture={clickGesture}>
                    <Animated.View style={[styles.box, animateStyle]}  ></Animated.View>
                </GestureDetector>
            </View>
        </GestureHandlerRootView>

    )
}

const styles = StyleSheet.create({
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red'
    },
    container: {
        padding: 30
    }
})