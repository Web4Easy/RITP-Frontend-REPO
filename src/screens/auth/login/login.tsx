import React from 'react';
import {Text, View, Image, ImageProps} from 'react-native';
import {AppBackground, AppButton, Input} from '../../../components';
import {Card, Icon} from '@rneui/themed';
import styles from './styles';
import {appIcons} from '../../../utils/styling/appAssets';
import {useState} from 'react';
import {colors} from '../../../utils';

interface LoginProps {}

interface InputOptions {
  email: String;
  password: String;
  emailError: boolean;
  passwordError: boolean;
  errorEmailMessage: String;
  errorPasswordMessage: String;
}

const Login = (props: LoginProps) => {
  const [inputOptions, setInputOptions] = useState<InputOptions>({
    email: '',
    password: '',
    emailError: false,
    passwordError: false,
    errorEmailMessage: '',
    errorPasswordMessage: '',
  });

  const renderInputIcon = (image: _SourceUri) => (
    <Image
      source={image}
      style={[
        styles.inputIcon,
        {
          tintColor: inputOptions?.emailError ? colors.error : colors.primary,
        },
      ]}
      resizeMode={'cover'}
    />
  );

  return (
    <AppBackground>
      <View style={{flex: 0.4}}></View>
      <View style={{flex: 0.8}}>
        <Card containerStyle={styles.cardContainer}>
          <Card.Title style={styles.welcomeText}>Welcome Back!</Card.Title>
          <Input
            placeholder={'Email'}
            value={inputOptions.email}
            onChangeText={(value: String) => {
              setInputOptions({
                ...inputOptions,
                email: value,
              });
            }}
            leftIcon={() => renderInputIcon(appIcons.emailIcon)}
            renderErrorMessage={inputOptions.emailError}
            errorMessage={inputOptions.errorEmailMessage}
          />
          <Input
            placeholder={'Create a password'}
            secureTextEntry
            value={inputOptions.password}
            onChangeText={(value: String) => {
              setInputOptions({
                ...inputOptions,
                password: value,
              });
            }}
            leftIcon={() => renderInputIcon(appIcons.passwordIcon)}
            renderErrorMessage={inputOptions.passwordError}
            errorMessage={inputOptions.errorPasswordMessage}
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
