import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


const CameraPhoto = () => {
  const [image, setImage] = useState(null);

  const [hasPermission, setHasPermission] = useState(null);
  // Yêu cầu quyền truy cập thư viện ảnh
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Quyền truy cập bị từ chối');
        setHasPermission(false);
      } else {
        setHasPermission(true);
      }
    })();
  }, []);

  const takePhoto = async () => {
    if (!hasPermission) {
      Alert.alert('Bạn cần cấp quyền truy cập camera để chụp ảnh.');
      return;
    }

    let res = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!res.canceled && res.assets.length > 0) {
      setImage(res.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chụp ảnh</Text>
      <Button title="Chụp ảnh" onPress={() => takePhoto()} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

export default CameraPhoto;

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
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
