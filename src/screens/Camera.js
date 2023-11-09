import Orientation from 'react-native-orientation';
import React, { useEffect, useCallback } from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import { Text, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Camera, useCameraPermission, useCameraDevice, useCodeScanner, useCameraFormat, Templates } from 'react-native-vision-camera';

export default function Scanner() {
  // Select default camera
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, Templates.Photo);

  // Handle permission
  const { hasPermission, requestPermission } = useCameraPermission();
  // Get actual dimension
  const dimensions = useWindowDimensions();

  // Use effects
  useEffect(() => {
    if(hasPermission===false) requestPermission();
  }, [hasPermission]);

  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlock orientation
    }
  }, []);

  // Callbacks
  const codeScanner = useCodeScanner({
    codeTypes: ["code-128" ,"code-39" ,"code-93" ,"codabar" ,"ean-13" ,"ean-8" ,"itf" ,"upc-e" ,"qr" ,"pdf-417" ,"aztec" ,"data-matrix"],
    onCodeScanned: (codes) => {
      //console.log(`Scanned ${codes.length} codes!`);
      codes.forEach(code => {
        if(code.frame.y<dimensions.width && code.frame.y>dimensions.width/3 && code.frame.x<dimensions.height && code.frame.x>dimensions.height/3){
          console.log(codes.type, code.value, code.frame);
        }
      });
    },
  });

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...')
    const permission = await requestPermission()
    console.log(`Camera permission status: ${permission}`)
    if (permission === 'denied') await Linking.openSettings()
  }, []);

  // Render
  const bottomStyle = useAnimatedStyle(
    () => ({
            backgroundColor: 'rgba(60, 60, 59,0.7)',
            position: 'absolute',
            height: dimensions.height*0.3, 
            left: 0, 
            top: dimensions.height*(0.7),
            width: dimensions.width
          }),
    [],
  );
  const topStyle = useAnimatedStyle(
    () => ({
            backgroundColor: 'rgba(60, 60, 59,0.7)',
            position: 'absolute',
            height: dimensions.height*0.3, 
            left: 0, 
            top: 0,
            width: dimensions.width,
          }),
    [],
  );
  const leftStyle = useAnimatedStyle(
    () => ({
            backgroundColor: 'rgba(60, 60, 59,0.7)',
            position: 'absolute',
            height: dimensions.height*0.4, 
            left: 0, 
            top: dimensions.height*0.3,
            width: dimensions.width*0.2
          }),
    [],
  );
  const rightStyle = useAnimatedStyle(
    () => ({
            backgroundColor: 'rgba(60, 60, 59,0.7)',
            position: 'absolute',
            height: dimensions.height*0.4, 
            left: dimensions.width*0.8, 
            top: dimensions.height*0.3,
            width: dimensions.width*0.2,
          }),
    [],
  );

  if(hasPermission===false){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to{'\n'}Vision Camera.</Text>
        <View style={styles.permissionsContainer}>
          <Text style={styles.permissionText}>
            Vision Camera needs <Text style={styles.bold}>Camera permission</Text>.{' '}
            <Text style={styles.hyperlink} onPress={requestCameraPermission}>
              Grant
            </Text>
          </Text>
        </View>
    </View>
    );
  }
  else if(device == null){
    return <Text>No camera found</Text>;
  }
  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
      <Animated.View style={topStyle} />
      <Animated.View style={bottomStyle} />
      <Animated.View style={leftStyle} />
      <Animated.View style={rightStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 38,
    fontWeight: 'bold',
    maxWidth: '80%',
  },
  banner: {
    position: 'absolute',
    opacity: 0.4,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  permissionsContainer: {
    marginTop: 1 * 2,
  },
  permissionText: {
    fontSize: 17,
  },
  hyperlink: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
})