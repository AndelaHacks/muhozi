import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene, Modal } from 'react-native-router-flux';
import store from './config/Store';
import Articles from './containers/Articles';
import Splash from './containers/Splash';

const RouterWithRedux = connect()(Router);

export default () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Modal key="root">
        <Scene key="splash" component={Splash} hideNavBar />
        <Scene key="articles" component={Articles} title="Articles" />
      </Modal>
    </RouterWithRedux>
  </Provider>
);
