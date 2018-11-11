import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene, Modal } from 'react-native-router-flux';
import store from './config/Store';
import Articles from './containers/Articles';
import Splash from './containers/Splash';
import Post from './containers/Post';
import Login from './containers/Login';
import Signup from './containers/Signup';

const RouterWithRedux = connect()(Router);

export default () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Modal key="root">
        <Scene key="splash" component={Splash} hideNavBar />
        <Scene
          key="login"
          component={Login}
          title="Login"
          hideNavBar={false}
          navigationBarStyle={{ backgroundColor: '#28628d' }}
          titleStyle={{ color: '#fff' }}
        />
        <Scene
          key="signup"
          component={Signup}
          title="Sign up"
          navigationBarStyle={{ backgroundColor: '#28628d' }}
          titleStyle={{ color: '#fff' }}
        />
        <Scene
          key="articles"
          component={Articles}
          title="Articles"
          navigationBarStyle={{ backgroundColor: '#28628d' }}
          titleStyle={{ color: '#fff' }}
        />
        <Scene
          key="post"
          title="Check the link"
          component={Post}
          navigationBarStyle={{ backgroundColor: '#28628d' }}
          titleStyle={{ color: '#fff' }}
        />
      </Modal>
    </RouterWithRedux>
  </Provider>
);
