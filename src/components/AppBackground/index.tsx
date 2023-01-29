import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {appImages} from '../../utils';

interface AppBackgroundProps {
  children: any;
}

const AppBackground = ({children}: AppBackgroundProps) => {
  return (
    <ImageBackground
      resizeMode={'cover'}
      style={styles.imageBackStyle}
      source={appImages.authBGwithLogo}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export {AppBackground};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
