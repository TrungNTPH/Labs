import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Lấy giá trị từ Redux store
  const dispatch = useDispatch(); // Gửi action để cập nhật state

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Tăng" onPress={() => dispatch(increment())} />
      <Button title="Giảm" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  text: { fontSize: 24, marginBottom: 10 },
});

export default Counter;
