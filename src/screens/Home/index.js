import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import * as Colors from '../../config/Colors';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  gotoScreen = sc => {
    console.log(this.props);
    Navigation.push(this.props.componentId, {
      component: {
        name: sc,
        options: {
          topBar: {
            title: {
              text: sc,
            },
          },
        },
      },
    });
  };
  render() {
    return (
      <View>
        <Button title="About" onPress={() => this.gotoScreen('About')} />
        <Button title="Detail" onPress={() => this.gotoScreen('Detail')} />

        <Text>abchjvhggjkhjkhjkhkjhkjhk????</Text>
      </View>
    );
  }
}
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
    fontSize: 14,
    selectedFontSize: 14,
    color: 'black',
  },
});
