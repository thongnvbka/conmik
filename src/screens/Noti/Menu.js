/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import * as Colors from '../../config/Colors';
import * as Icons from '../../config/IconManagers';
import FastImage from 'react-native-fast-image';

const menus = [
  {icon: Icons.sales, title: 'Khuyến mãi', color: Colors.greenSERVICE},
  {icon: Icons.paint, title: 'Sản phẩm mới', color: Colors.orangeSERVICE},
  {icon: Icons.hand, title: 'Dịch vụ nổi bật', color: Colors.blueSERVICE},
  {icon: Icons.cup, title: 'Tin tức mới cập nhật', color: Colors.yellowSERVICE},
];

export default class Menu extends React.PureComponent {
  //_date = moment(new Date()).format('DD/MM/YYYY');
  render() {
    const {
      noti_news,
      noti_products,
      noti_sales,
      noti_services,
      onPress,
    } = this.props;
    const title0 =
      noti_sales && noti_sales[0]
        ? noti_sales[0].title || '---'
        : 'Chưa có khuyến mãi nào';
    const title1 =
      noti_products && noti_products[0]
        ? noti_products[0].title || '---'
        : 'Chưa có sản phẩm nào';
    const title2 =
      noti_services && noti_services[0]
        ? noti_services[0].title || '---'
        : 'Chưa có dịch vụ nào';
    const title3 =
      noti_news && noti_news[0]
        ? noti_news[0].title || '---'
        : 'Chưa có tin tức nào';
    return menus.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.container, {borderTopWidth: index != 0 ? 0.3 : 0}]}
        onPress={() => onPress(index)}
        activeOpacity={0.8}>
        <View style={[styles.vIcon, {backgroundColor: item.color}]}>
          <FastImage
            style={styles.icon}
            resizeMode="contain"
            source={item.icon}
            tintColor="white"
          />
        </View>

        <View style={{flex: 1, justifyContent: 'center', marginRight: 30}}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.content} numberOfLines={1}>
            {index == 0
              ? title0
              : index == 1
              ? title1
              : index == 2
              ? title2
              : title3}
          </Text>
        </View>
        <FastImage
          style={[styles.icon2]}
          source={Icons.next}
          resizeMode="contain"
          tintColor="black"
        />
      </TouchableOpacity>
    ));
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 10,
    borderColor: 'grey',
    borderTopWidth: 0.3,
  },
  vIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    padding: 0,
  },
  content: {
    color: '#606060',
    fontSize: 16,
    padding: 0,
  },
  icon2: {
    height: 20,
    width: 20,
  },
  vNoti: {
    backgroundColor: Colors.redCONMIK,
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
