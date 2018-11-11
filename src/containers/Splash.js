import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../styles';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.login({ type: 'reset' });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="bulb1" size={50} color="#28628d" />
        <Text style={[styles.splashHeader, { color: '#28628d' }]}>Thibitisha</Text>
      </View>
    );
  }
}
