/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import I18n from '../modules/i18n';

import * as Routers from '../navigations/Navigations';
import * as Utils from '../Utils';
import FastImage from 'react-native-fast-image';
import * as Icons from '../config/IconManagers';
import {
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Keyboard,
  Image,
  View,
} from 'react-native';

import * as Fonts from '../config/Fonts';
import {fontSize} from '../modules/fontSize';

const {width, height} = Dimensions.get('window');
const HEIGHT_BANGE = 1153;
const WIDTH_BANGE = 1737;
const HEIGHT_IMAGE = (width * HEIGHT_BANGE) / WIDTH_BANGE;
const HEIGHT_FORM = height - HEIGHT_IMAGE;
const SIZE = Utils.isIphoneX() ? HEIGHT_FORM / 200 : HEIGHT_FORM / 400;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
    };
  }
  _onLogin = () => {
    Routers.goHome();
  };

  render() {
    console.log('ff4324');

    const {phone, password} = this.state;
    return (
      <TouchableOpacity activeOpacity={1}>
        <View>
          <Image source={Icons.bange} style={styles.image} />
          <View style={styles.viewinput}>
            <Image style={styles.styleIcon} source={Icons.account_rad} />
            <TextInput
              style={styles.texInput}
              keyboardType="numeric"
              secureTextEntry={true}
              autoCapitalize={'none'}
              placeholder={'USER NAME'}
              onChangeText={phone => this.setState({phone})}
            />
          </View>
          <View style={styles.viewinput}>
            <Image style={styles.styleIcon} source={Icons.password_rad} />
            <TextInput
              style={styles.texInput}
              keyboardType="numeric"
              secureTextEntry={true}
              autoCapitalize={'none'}
              placeholder={'PASSWORD'}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={this._onLogin}>
            <LinearGradient
              colors={['#a11e23', '#e91e24']}
              style={styles.gradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={[styles.text, {fontSize: fontSize + 2}]}>
                {I18n.t('login').toUpperCase()}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.forgot}
            onPress={this._onForgotPassword}>
            <Text
              style={{
                fontSize,
                color: 'grey',
              }}>
              {I18n.t('forgot').toUpperCase()}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.forgot}
            onPress={this._onSignup}>
            <Text
              style={{
                fontSize,
                color: 'grey',
              }}>
              {I18n.t('signup').toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewinput: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  texInput: {
    width: 250,
    height: 40,
    padding: 0,
    margin: 0,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  password: {},
  login: {
    fontSize: fontSize + 2,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 5 * SIZE,
  },
  inputView: {
    marginHorizontal: 40,
    marginTop: 5 * SIZE,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
  },
  styleIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginBottom: 5 * SIZE,
    marginTop: 10,
  },
  formText: {
    paddingBottom: 5 * SIZE,
    borderBottomWidth: 0.3,
    borderColor: 'grey',
  },
  textinput: {
    flex: 1,
    color: 'black',
    // fontFamily: 'MYRIADPRO-REGULAR',
    fontSize: 18,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: width,
    height: HEIGHT_IMAGE,
  },
  btnlogin: {
    alignItems: 'center',
    backgroundColor: '#ff0000',
    padding: 10,
    marginHorizontal: 70,
    marginTop: 10 * SIZE,
    marginBottom: 10 * SIZE,
    height: 50,
    borderRadius: 25,
  },
  button: {
    marginHorizontal: 70,
    marginTop: 40 * SIZE,
    marginBottom: 10 * SIZE,
    height: 50,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
  },
  forgot: {
    marginHorizontal: 15,
    marginBottom: 10 * SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  other: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dash: {
    width: 50,
    height: 0.5,
    backgroundColor: 'grey',
  },
  viewIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10 * SIZE,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
export default Login;
