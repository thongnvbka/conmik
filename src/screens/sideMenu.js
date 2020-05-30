import React, {Component} from 'react';
import FastImage from 'react-native-fast-image';
import {fontSize} from '../modules/fontSize';
import * as Fonts from '../config/Fonts';

import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Colors from '../config/Colors';
import * as Icons from '../config/IconManagers';
import * as Utils from '../Utils';

const {width} = Dimensions.get('window');
const menu = [
  {icon: Icons.info, title: 'Giới thiệu'},
  {icon: Icons.noti, title: 'Thông báo'},
  {icon: Icons.cup, title: 'Tin tức'},
  {icon: Icons.user, title: 'Tài khoản'},
  {icon: Icons.password, title: 'Đổi mật khẩu'},
  {icon: Icons.exit, title: 'Đăng xuất'},
];
const HEIGHT_IMAGE = 500;
const WIDTH_IMAGE = 750;
const WIDTH_COVER = (3 * width) / 4;
const HEIGHT_COVER = (HEIGHT_IMAGE * WIDTH_COVER) / WIDTH_IMAGE;

class ItemHelps extends Component {
  render() {
    const {item, onPress, backgroundColor, color} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress(item)}
        style={[
          styles.TouchadOpa,
          {backgroundColor: backgroundColor || Colors.silverCONMIK},
        ]}>
        <FastImage
          source={item.icon}
          style={styles.icon}
          resizeMode="contain"
          tintColor={color}
        />

        <Text style={[styles.text, {color}]} numberOfLines={1}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.status} />

        <ScrollView>
          <FastImage source={Icons.banner} style={styles.banner} />
          {menu.map((item, index) => (
            <ItemHelps
              key={index}
              item={item}
              index={index}
              onPress={this._onMenu}
            />
          ))}
          <View style={{height: 10}} />
        </ScrollView>
      </View>
    );
  }
}
export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    width: WIDTH_COVER,
    height: HEIGHT_COVER,
  },
  info: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  status: {
    backgroundColor: '#d4d4d4',
  },
  TouchadOpa: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.silverCONMIK,
    borderRadius: 5,
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  text: {
    flex: 1,
    fontSize,
    color: 'black',
  },
  next: {
    width: 10,
    height: 10,
  },
});
