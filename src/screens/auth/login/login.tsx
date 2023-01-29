import React from 'react';
import {Text, View, Image} from 'react-native';
import {AppBackground, AppButton, Input} from '../../../components';
import {Card, Icon} from '@rneui/themed';
import styles from './styles';
import {appIcons} from '../../../utils/styling/appAssets';
import {useState} from 'react';

interface LoginProps {}

const Login = (props: LoginProps) => {
  const [inputOptions, setInputOptions] = useState({
    email: '',
    password: '',
  });

  return (
    <AppBackground>
      <View style={{flex: 0.4}}></View>
      <View style={{flex: 0.8}}>
        <Card containerStyle={styles.cardContainer}>
          <Card.Title style={styles.welcomeText}>Welcome Back!</Card.Title>
          <Input
            placeholder={'Email'}
            value={inputOptions.email}
            onChangeText={value => {
              setInputOptions({
                ...inputOptions,
                email: value,
              });
            }}
            leftIcon={
              <Image
                source={appIcons.emailIcon}
                style={styles.inputIcon}
                resizeMode={'cover'}
              />
            }
          />
          <Input
            placeholder={'Create a password'}
             value={inputOptions.password}
            onChangeText={value => {
              setInputOptions({
                ...inputOptions,
                password: value,
              });
            }}
            leftIcon={
              <Image
                source={appIcons.passwordIcon}
                style={styles.inputIcon}
                resizeMode={'contain'}
              />
            }
          />
        </Card>
      </View>
      <View style={styles.bottomBody}>
        <AppButton title={'Log In'} onPress={() => {}} />
        <Text style={styles.bottomText}>
          Don’t have an account yet?{' '}
          <Text onPress={() => {}} style={styles.signUpText}>
            Sign Up
          </Text>
        </Text>
      </View>
    </AppBackground>
  );
};

export default Login;
