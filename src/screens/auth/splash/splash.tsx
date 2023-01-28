import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import {appImages, appLogos, colors, fontFamily, HP, WP} from '../../../utils';

interface SplashProps {}

const Splash = (props: SplashProps) => {
  return (
    <ImageBackground
      style={styles.imageBackStyle}
      source={appImages.appBackground}
    >
      <SafeAreaView style={styles.container}>
        <Image
          resizeMode={'contain'}
          source={appLogos.logoWithText}
          style={styles.appLogo}
        />
        <Text style={styles.description}>
          {`Supporting the Reflex Integration \n   Through Play (RITP) exercises`}
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackStyle: {
    width: '100%',
    height: '100%',
  },
  appLogo: {
    width: WP('60'),
    height: HP('30'),
    bottom: HP('6'),
  },
  description: {
    fontFamily: fontFamily['DMSans-Bold'],
    fontSize: 17,
    bottom: HP('3'),
    color: colors.black,
  },
});
