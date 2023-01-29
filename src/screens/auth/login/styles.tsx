import {StyleSheet} from 'react-native';
import {fontFamily, WP, HP, colors} from '../../../utils';

const styles = StyleSheet.create({
  //Input Containers
  cardContainer: {
    justifyContent: 'flex-start',
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  //BottomView
  bottomBody: {
    flex: 0.4,
    paddingHorizontal: WP('10'),
    justifyContent: 'center',
  },
  bottomText: {
    marginTop: HP('4'),
    alignSelf: 'center',
    fontFamily: fontFamily['DMSans-Regular'],
    fontSize: 15,
  },
  signUpText: {
    fontFamily: fontFamily['DMSans-Bold'],
    fontSize: 15,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  welcomeText: {
    textAlign: 'left',
    fontFamily: fontFamily['DMSans-Bold'],
    fontSize: 16,
  },
  inputIcon: {
    width: 20,
    height: 20,
  },
});

export default styles;
