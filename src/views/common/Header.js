import React, {PureComponent} from 'react';
import {Keyboard, Text, TouchableOpacity, StyleSheet} from 'react-native';

import FastImage from 'react-native-fast-image';
import {fontSize} from '../../modules/fontSize';
import * as Icons from '../../config/IconManagers';
import * as Fonts from '../../config/Fonts';
import Menu, {MenuItem} from 'react-native-material-menu';

class Header extends PureComponent {
  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  onMenu = (item, index) => {
    this.hideMenu();
    if (this.props.onMenu) {
      this.props.onMenu(item, index);
    }
  };

  render() {
    const {
      leftIcon,
      rightIcon,
      title,
      onLeftPress,
      onRightPress,
      rightMenu,
      logo,
      largeTitle,
      titleColor,
      dropdownTitle,
      onPressTitle,
      leftText,
      rightText,
      leftTextStyle,
      rightTextStyle,
      activeOpacityRight,
    } = this.props;
    const rightView = (
      <TouchableOpacity
        onPress={rightMenu ? this.showMenu : onRightPress}
        style={[styles.viewIcon]}
        activeOpacity={activeOpacityRight || 0.7}>
        {rightText ? (
          <Text style={rightTextStyle || styles.text}>{rightText}</Text>
        ) : (
          <FastImage
            source={rightIcon}
            style={styles.icon}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    );

    return (
      <TouchableOpacity
        style={styles.viewHeader}
        activeOpacity={1}
        onPress={Keyboard.dismiss}>
        <TouchableOpacity
          onPress={onLeftPress}
          style={[styles.viewIcon]}
          activeOpacity={0.7}>
          {leftText ? (
            <Text style={leftTextStyle || styles.text}>{leftText}</Text>
          ) : (
            <FastImage
              source={leftIcon || Icons.back}
              style={styles.icon}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>

        {logo ? (
          <FastImage source={logo} style={styles.logo} resizeMode="contain" />
        ) : null}

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
          onPress={onPressTitle}
          activeOpacity={dropdownTitle ? 0.7 : 1}>
          <Text
            style={[
              styles.title,
              {fontSize: fontSize + 2, color: titleColor || 'black'},
            ]}
            numberOfLines={1}>
            {title}
          </Text>
        </TouchableOpacity>

        {rightMenu ? (
          <Menu
            ref={ref => (this._menu = ref)}
            button={rightView}
            style={{borderWidth: 0.2, borderColor: 'grey'}}>
            {rightMenu.map((item, index) => (
              <MenuItem
                textStyle={{
                  fontSize,
                  textAlign: 'center',
                  color: 'black',
                }}
                onPress={() => this.onMenu(item, index)}
                key={index.toString()}>
                {item.title.toString()}
              </MenuItem>
            ))}
          </Menu>
        ) : (
          rightView
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  viewHeader: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  viewIcon: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  user: {
    width: 30,
    height: 30,
  },
  title: {
    fontFamily: Fonts.utm_avo,
  },
  logo: {
    height: 50,
    width: 50,
  },
  text: {
    fontSize,
    color: 'black',
    fontFamily: Fonts.utm_avo,
  },
});

export default Header;
