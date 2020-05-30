/* eslint-disable no-labels */
// In index.js of a new project
import {Navigation} from 'react-native-navigation';
import React, {Component} from 'react';
import Login from './src/screens/login';
import Home from './src/screens/Home/index';
import About from './src/screens/About';
import Detail from './src/screens/Detail';
import SideMenu from './src/screens/sideMenu';
import Service from './src/screens/Services';
import * as Routers from './src/navigations/Navigations';
const {View, Text, StyleSheet} = require('react-native');

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('About', () => About);
Navigation.registerComponent('Detail', () => Detail);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('SideMenu', () => SideMenu);
Navigation.registerComponent('Service', () => Service);

Navigation.events().registerAppLaunchedListener(async () => {
  Routers.goLogin();
  // Navigation.setRoot({
  //   root: {
  //     stack: {
  //       children: [
  //         {
  //           component: {
  //             name: 'Home',
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
});
Home.options = {
  topBar: {
    title: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};
About.options = {
  topBar: {
    title: {
      color: 'white',
    },
    bottomTab: {
      Text: 'About',
    },
  },
};
Detail.options = {
  topBar: {
    title: {
      color: 'white',
    },
    bottomTab: {
      Text: 'Detail',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    backgroundColor: '#4d089a',
    fontSize: 14,
    selectedFontSize: 14,
    color: '#000000',
  },
});
