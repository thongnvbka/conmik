/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, TouchableOpacity, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {fontSize} from '../../modules/fontSize';
import * as Icons from '../../config/IconManagers';
import * as Colors from '../../config/Colors';

class InputView extends React.PureComponent {
  constructor(props) {
    super(props);
    const {secureTextEntry} = this.props;
    this.state = {
      text: '',
      show_pass: secureTextEntry || false,
    };
  }

  getText = () => {
    return this.state.text;
  };

  _onSubmitEditing = () => {
    if (this.props.onSubmitEditing) {
      this.props.onSubmitEditing();
    }
  };

  _onChangeText = text => {
    this.setState({text});
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  };

  focus = () => {
    if (this.TextInput) {
      this.TextInput.focus();
    }
  };

  blurTextInput = () => {
    this.TextInput.blur();
  };

  _onShowPass = () => {
    const {show_pass} = this.state;
    this.setState({show_pass: !show_pass});
    if (this.props.onShowPass) {
      this.props.onShowPass(!show_pass);
    }
  };

  _onDeleteIcon = () => {
    this.setState({text: ''});
    if (this.props.onDeleteIcon) {
      this.props.onDeleteIcon();
    }
  };

  _renderTextInput() {
    const {show_pass, text} = this.state;
    const {
      style,
      placeholder,
      returnKeyType,
      keyboardType,
      editable,
      autoCapitalize,
      visiblePass,
      onKeyPress,
      autoFocus,
      multiline,
      numberOfLines,
      maxLength,
      onFocus,
      onEndEditing,
      value,
      selectTextOnFocus,
      placeholderTextColor,
    } = this.props;
    return (
      <TextInput
        ref={ref => (this.TextInput = ref)}
        style={[{padding: 0, margin: 0}, style || {color: 'black'}]}
        value={value || text}
        autoCapitalize={autoCapitalize || 'sentences'}
        placeholderTextColor="grey"
        onChangeText={this._onChangeText}
        returnKeyType={returnKeyType || 'next'}
        placeholder={placeholder || ''}
        onSubmitEditing={this._onSubmitEditing}
        keyboardType={keyboardType || 'default'}
        autoCorrect={false}
        underlineColorAndroid={'transparent'}
        secureTextEntry={visiblePass || show_pass}
        editable={editable}
        autoFocus={autoFocus || false}
        multiline={multiline || false}
        numberOfLines={numberOfLines || 1}
        maxLength={maxLength}
        onFocus={onFocus}
        onEndEditing={onEndEditing}
        selectTextOnFocus={selectTextOnFocus}
        onKeyPress={onKeyPress}
        placeholderTextColor={placeholderTextColor}
      />
    );
  }

  render() {
    const {show_pass, text} = this.state;
    const {
      styleContainer,
      formText,
      secureTextEntry,
      icon,
      title,
      value,
      onRightIcon,
      styleForm,
      styleFormText,
      styleIcon,
      rightIcon,
      showDeleteIcon,
      tintColor,
    } = this.props;
    const icon_eye = show_pass ? Icons.visible : Icons.invisible;
    const content = value || text;
    return formText ? (
      <View style={styleContainer}>
        {title ? (
          <Text
            numberOfLines={1}
            style={{fontSize: fontSize - 2, color: 'black', marginBottom: 5}}>
            {title.toUpperCase()}
          </Text>
        ) : null}

        <TouchableOpacity
          activeOpacity={1}
          style={[
            styleForm || {},
            {flexDirection: 'row', alignItems: 'center'},
          ]}
          onPress={this.focus}>
          {icon ? (
            <FastImage
              source={icon}
              style={[styleIcon || {width: 25, height: 25, marginRight: 10}]}
              resizeMode="contain"
              tintColor={tintColor}
            />
          ) : null}

          <View
            style={[
              styleFormText || {},
              {flexDirection: 'row', alignItems: 'center', flex: 1},
            ]}>
            {this._renderTextInput()}

            {showDeleteIcon && content.length > 0 ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{padding: 10}}
                onPress={this._onDeleteIcon}>
                <FastImage
                  source={Icons.delete_icon}
                  style={{width: 15, height: 15}}
                  resizeMode="contain"
                  tintColor={tintColor || Colors.redMDC}
                />
              </TouchableOpacity>
            ) : null}

            {secureTextEntry ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{marginLeft: 10}}
                onPress={this._onShowPass}>
                <FastImage
                  source={icon_eye}
                  style={{width: 25, height: 25}}
                  resizeMode="contain"
                  tintColor={tintColor || Colors.redMDC}
                />
              </TouchableOpacity>
            ) : null}

            {rightIcon ? (
              <TouchableOpacity
                activeOpacity={onRightIcon ? 0.7 : 1}
                onPress={onRightIcon}>
                <FastImage
                  source={rightIcon}
                  style={[styleIcon || {width: 25, height: 25}]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    ) : (
      this._renderTextInput()
    );
  }
}

export default InputView;
