import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { InputItem, Button } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import styles from '../styles';

const Post = () => (
  <View style={[styles.container, { backgroundColor: '#fff', justifyContent: 'flex-start' }]}>
    <StatusBar barStyle="light-content" />
    <Text style={[styles.padTop, { fontSize: 20 }]}>Enter or Paste the resources link</Text>
    <InputItem style={styles.padTop} placeholder="Url..." />
    <Button style={styles.padTop} onPressIn={() => Actions.pop()}>
      <Text> Check </Text>
    </Button>
  </View>
);

export default Post;
