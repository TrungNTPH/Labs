import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const Bai2lab4 = () => {
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  // Yêu cầu quyền truy cập thư viện ảnh
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Quyền truy cập thư viện bị từ chối');
        setHasPermission(false);
      } else {
        setHasPermission(true);
      }
    })();
  }, []);

  const pickImage = async () => {
    if (!hasPermission) {
      Alert.alert('Bạn cần cấp quyền truy cập thư viện để chọn ảnh.');
      return;
    }

    let res = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    });

    if (!res.canceled && res.assets.length > 0) {
      setImage(res.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn ảnh từ thư viện</Text>
      <Button title="Chọn ảnh" onPress={pickImage} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

export default Bai2lab4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});
