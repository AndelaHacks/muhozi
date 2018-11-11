import React from 'react';
import { View, Text } from 'react-native';
import { InputItem, Button } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import styles from '../styles';

const Post = () => (
  <View style={[styles.container, { backgroundColor: '#fff', justifyContent: 'flex-start' }]}>
    <InputItem style={styles.padTop} placeholder="Url..." />
    <Button style={styles.padTop} onPressIn={() => Actions.pop()}>
      <Text> Check </Text>
    </Button>
  </View>
);

export default Post;
