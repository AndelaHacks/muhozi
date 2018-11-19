import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { InputItem, Button, Checkbox } from 'antd-mobile-rn';
import styles from '../styles';

const Signup = () => (
  <View style={[styles.container, { backgroundColor: '#fff', justifyContent: 'flex-start' }]}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.padTop}>Get the truth!</Text>
    <InputItem placeholder="Name..." />
    <InputItem style={styles.padTop} placeholder="Email..." />
    <InputItem style={styles.padTop} type="password" placeholder="*******" />
    <Checkbox.AgreeItem style={styles.padTop}>
      <Text style={{ fontSize: 20 }}>Media Member</Text>
    </Checkbox.AgreeItem>
    <Button style={styles.padTop}>
      <Text>Signup</Text>
    </Button>
  </View>
);

export default Signup;
