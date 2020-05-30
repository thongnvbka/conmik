import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';

import I18n from '../../modules/i18n';
import * as Colors from '../../config/Colors';
import {fontSize} from '../../modules/fontSize';
import FastImage from 'react-native-fast-image';

class NoData extends React.PureComponent {
  render() {
    const {onNoData, iconFail, textFail, hideTextRetry} = this.props;
    return (
      <TouchableOpacity
        style={styles.center}
        activeOpacity={1}
        onPress={Keyboard.dismiss}>
        <TouchableOpacity
          style={styles.vNetworking}
          activeOpacity={hideTextRetry ? 1 : 0.8}
          onPress={onNoData}>
          <FastImage
            source={iconFail}
            style={styles.empty}
            resizeMode="contain"
          />

          <Text style={[styles.textEmpty, {fontSize}]}>{textFail}</Text>

          {hideTextRetry ? null : (
            <Text style={[styles.textReload, {fontSize}]}>
              {I18n.t('tap_retry')}
            </Text>
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

export default NoData;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vNetworking: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  empty: {
    width: 100,
    height: 100,
  },
  textEmpty: {
    color: '#6d6d6d',
    marginTop: 10,
  },
  textReload: {
    color: Colors.redCONMIK,
    marginTop: 10,
  },
});
