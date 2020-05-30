/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import FastImage from 'react-native-fast-image';
import {fontSize} from '../modules/fontSize';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Colors from '../config/Colors';
import * as Icons from '../config/IconManagers';
import * as Utils from '../Utils';
//import * as Views from '../views/ViewManagers';

const {height, width} = Dimensions.get('window');
const HEIGHT_BANGE = 1153;
const WIDTH_BANGE = 1737;
const HEIGHT_IMAGE = (width * HEIGHT_BANGE) / WIDTH_BANGE;
const HEIGHT_FORM = height - HEIGHT_IMAGE;
const SIZE = Utils.isIphoneX() ? HEIGHT_FORM / 200 : HEIGHT_FORM / 400;
class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old_password: '',
      new_password: '',
      confirm_password: '',
    };
  }
  render() {
    //const {new_password, old_password, confirm_password} = this.state;
    return (
      <View>
        <FastImage
          source={Icons.background}
          style={{width, height: height - 50}}
        />
        <View style={styles.container}>
          <View style={styles.info}>
            <TouchableOpacity style={styles.form}>
              <FastImage
                source={Icons.password_rad}
                style={[
                  styles.styleIcon || {width: 25, height: 25, marginRight: 10},
                ]}
                resizeMode="contain"
                tintColor="white"
              />
              <TextInput
                style={styles.texInput}
                keyboardType="numeric"
                secureTextEntry={true}
                autoCapitalize={'none'}
                placeholder={'Mật khẩu hiện tại'}
                onChangeText={phone => this.setState({phone})}
                placeholderTextColor="#FFFFFF80"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
              <FastImage
                source={Icons.password_rad}
                style={[
                  styles.styleIcon || {width: 25, height: 25, marginRight: 10},
                ]}
                resizeMode="contain"
                tintColor="white"
              />
              <TextInput
                style={styles.texInput}
                keyboardType="numeric"
                secureTextEntry={true}
                autoCapitalize={'none'}
                placeholder={'Mật khẩu mới'}
                onChangeText={phone => this.setState({phone})}
                placeholderTextColor="#FFFFFF80"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
              <FastImage
                source={Icons.password_rad}
                style={[
                  styles.styleIcon || {width: 25, height: 25, marginRight: 10},
                ]}
                resizeMode="contain"
                tintColor="white"
              />
              <TextInput
                style={styles.texInput}
                keyboardType="numeric"
                secureTextEntry={true}
                autoCapitalize={'none'}
                placeholder={'Xác nhận mật khẩu'}
                onChangeText={phone => this.setState({phone})}
                placeholderTextColor="#FFFFFF80"
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={this._changePassword}>
              <Text style={[styles.text, {fontSize: fontSize + 3}]}>
                {'Xác nhận'.toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, {backgroundColor: 'grey'}]}
              onPress={this._changePassword}>
              <Text
                style={[styles.text, {fontSize: fontSize + 3, color: 'white'}]}>
                {'Huỷ'.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    marginTop: 40,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  texInput: {
    color: 'white',
    width: 250,
    height: 40,
    padding: 10,
    margin: 0,
    borderColor: 'gray',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderBottomWidth: 0.5,
    padding: 40,
    height: 45,
  },
  info: {
    margin: 30,
    backgroundColor: '#00000070',
    borderRadius: 25,
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    color: Colors.redCONMIK,
  },
  styleIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  button: {
    margin: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    opacity: 0.8,
  },
});
