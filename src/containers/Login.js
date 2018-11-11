import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { InputItem, Button } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import styles from '../styles';

const Login = () => (
  <View style={[styles.container, { backgroundColor: '#fff', justifyContent: 'flex-start' }]}>
    <Text style={styles.padTop}>Get the truth!</Text>
    <InputItem style={styles.padTop} type="email" placeholder="Email..." />
    <InputItem
      style={styles.padTop}
      type="password"
      placeholder="*******"
    />
    <Button style={styles.padTop} onPressIn={() => Actions.articles({ type: 'reset' })}>
      <Text>Login</Text>
    </Button>
    <View style={[styles.padTop, { flexDirection: 'row' }]}>
      <Text>Already have an account? </Text>
      <TouchableOpacity onPress={() => Actions.signup()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Login;
