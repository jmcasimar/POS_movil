import { Colors } from '../styles';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import Orientation from 'react-native-orientation';
import React, {useRef, useState, useEffect} from 'react';

const Splash = props => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    Orientation.lockToPortrait();

    setTimeout(() => {
      setAuthLoaded(true);
    }, 1000);

    return () => {
      Orientation.unlockAllOrientations(); // Unlock orientation
    }
  }, []);

  const onAnimationFinish = () => {
    setAnimationLoaded(true);
  };

  useEffect(() => {
    if (authLoaded && animationLoaded) {
      props.navigation.replace('Home');
    }
  }, [authLoaded, animationLoaded, props.navigation]);

  return (
      <LottieView
        ref={animation => {
          ref.current = animation;
        }}
        style={styles.lottieView}
        source={require('../assest/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
  );
};

const styles = StyleSheet.create({
  lottieView: {
    flex: 1,
    backgroundColor: Colors.background
  },
});

export default Splash;
