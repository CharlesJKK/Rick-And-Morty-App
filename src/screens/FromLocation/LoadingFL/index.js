import React from 'react';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import styles from './style';

const LoadingFL = ({style}) => (
  <View style={[styles.container, style]}>
    <AnimatedLottieView
      source={require('../../../../assets/lotties/gloot.json')}
      autoPlay={true}
      loop={true}
    />
  </View>
);

export default LoadingFL;