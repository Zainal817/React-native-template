import React, {useCallback, useEffect, useState} from 'react';
import {Linking, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme} from '../hooks';
import * as regex from '../constants/regex';
import {Block, Button, Input, Image, Text, Checkbox} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const isAndroid = Platform.OS === 'android';

interface ILogin {
  email: string;
  password: string;
  remember: boolean;
}

interface ILoginValidation {
  email: boolean;
  password: boolean;
}

const Login = () => {
  const {isDark} = useData();
  const navigation = useNavigation();
  const {assets, colors, gradients, sizes} = useTheme();

  const [login, setLogin] = useState<ILogin>({
    email: '',
    password: '',
    remember: false,
  });

  const [isValid, setIsValid] = useState<ILoginValidation>({
    email: false,
    password: false,
  });

  const handleChange = useCallback(
    (value: Partial<ILogin>) => {
      setLogin((state) => ({...state, ...value}));
    },
    [setLogin],
  );

  const handleLogin = useCallback(async () => {
    if (!Object.values(isValid).includes(false)) {
      
      try {
        // const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password);
        // console.log(userCredential.user)
        // navigate inside app
        navigation.navigate('Home');
      } catch (err) {
        console.log("Login error:", err.message);
      }
    }
  }, [isValid, login]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      email: regex.email.test(login.email),
      password: regex.password.test(login.password),
    }));
  }, [login]);

  return (
    <Block safe marginTop={sizes.md}>
      <Block paddingHorizontal={sizes.s}>
        {/* header image */}
        <Block flex={0} style={{zIndex: 0}}>
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            radius={sizes.cardRadius}
            source={assets.background}
            height={sizes.height * 0.3}>
            <Text h4 center white marginTop={sizes.l}>
              {'Welcome Back'}
            </Text>
          </Image>
        </Block>

        {/* login form */}
        <Block
          keyboard
          behavior={!isAndroid ? 'padding' : 'height'}
          marginTop={-(sizes.height * 0.2 - sizes.l)}>
          <Block
            flex={0}
            radius={sizes.sm}
            marginHorizontal="8%"
            shadow={!isAndroid}>
            <Block
              blur
              flex={0}
              intensity={90}
              radius={sizes.sm}
              overflow="hidden"
              justify="space-evenly"
              tint={colors.blurTint}
              paddingVertical={sizes.sm}>
              <Text p semibold center>
                {'Login'}
              </Text>

              {/* social login buttons */}
              <Block row center justify="space-evenly" marginVertical={sizes.m}>
                <Button outlined gray shadow={!isAndroid}>
                  <Image
                    source={assets.facebook}
                    height={sizes.m}
                    width={sizes.m}
                    color={isDark ? colors.icon : undefined}
                  />
                </Button>
                <Button outlined gray shadow={!isAndroid}>
                  <Image
                    source={assets.apple}
                    height={sizes.m}
                    width={sizes.m}
                    color={isDark ? colors.icon : undefined}
                  />
                </Button>
                <Button outlined gray shadow={!isAndroid}>
                  <Image
                    source={assets.google}
                    height={sizes.m}
                    width={sizes.m}
                    color={isDark ? colors.icon : undefined}
                  />
                </Button>
              </Block>

              {/* divider */}
              <Block
                row
                flex={0}
                align="center"
                justify="center"
                marginBottom={sizes.sm}
                paddingHorizontal={sizes.xxl}>
                <Block
                  flex={0}
                  height={1}
                  width="50%"
                  end={[1, 0]}
                  start={[0, 1]}
                  gradient={gradients.divider}
                />
                <Text center marginHorizontal={sizes.s}></Text>
                <Block
                  flex={0}
                  height={1}
                  width="50%"
                  end={[0, 1]}
                  start={[1, 0]}
                  gradient={gradients.divider}
                />
              </Block>

              {/* form inputs */}
              <Block paddingHorizontal={sizes.sm}>
                <Input
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={'Email Address'}
                  keyboardType="email-address"
                  placeholder={'Email Address'}
                  success={Boolean(login.email && isValid.email)}
                  danger={Boolean(login.email && !isValid.email)}
                  onChangeText={(value) => handleChange({email: value})}
                />
                <Input
                  secureTextEntry
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={'Password'}
                  placeholder={'Password'}
                  onChangeText={(value) => handleChange({password: value})}
                  success={Boolean(login.password && isValid.password)}
                  danger={Boolean(login.password && !isValid.password)}
                />
              </Block>

              {/* remember me & forgot password */}
              <Block row flex={0} align="center" paddingHorizontal={sizes.sm}>
                <Checkbox
                  marginRight={sizes.sm}
                  checked={login?.remember}
                  onPress={(value) => handleChange({remember: value})}
                />
                <Text>Remember me</Text>
                <Text
                  primary
                  semibold
                  marginLeft="auto"
                  onPress={() => Linking.openURL('https://example.com/reset')}>
                  Forgot Password?
                </Text>
              </Block>

              {/* buttons */}
              <Button
                onPress={handleLogin}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.primary}
                disabled={Object.values(isValid).includes(false)}>
                <Text bold white transform="uppercase">
                  {'Login'}
                </Text>
              </Button>

              <Button
                primary
                outlined
                shadow={!isAndroid}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                onPress={() => navigation.navigate('Register')}>
                <Text bold primary transform="uppercase">
                  {'Create Account'}
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Login;
