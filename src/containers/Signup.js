import React from 'react';
import { View, Text } from 'react-native';
import { InputItem, Button } from 'antd-mobile-rn';
import styles from '../styles';

const Signup = () => (
  <View style={[styles.container, { backgroundColor: '#fff', justifyContent: 'flex-start' }]}>
    <Text style={styles.padTop}>Get the truth!</Text>
    <InputItem placeholder="Name..." />
    <InputItem style={styles.padTop} placeholder="Email..." />
    <InputItem
      style={styles.padTop}
      type="password"
      placeholder="*******"
    />
    <Button style={styles.padTop}>
      <Text>Signup</Text>
    </Button>
  </View>
);

export default Signup;
