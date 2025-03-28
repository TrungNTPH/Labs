import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const CameraScreen = () => {
    const [imageUri, setImageUri] = useState(null);

    const [hasPermission, setHasPermission] = useState(null);
  // Yêu cầu quyền truy cập thư viện ảnh
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      console.log("Quyen camera")
      if (status !== 'granted') {
        Alert.alert('Quyền truy cập bị từ chối');
        setHasPermission(false);
      } else {
        setHasPermission(true);
      }
    })();
  }, []);

    const takePhoto = () => {
        launchCamera({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.error) {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={styles.container}>
            <Image
                source={imageUri ? { uri: imageUri } : require('../assets/delete.png')}
                style={styles.image}
            />
            <Button title="Chụp ảnh" onPress={takePhoto} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
});

export default CameraScreen;
