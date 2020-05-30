/* eslint-disable eqeqeq */
import React from 'react';
import {View, StyleSheet} from 'react-native';

import Spinner from 'react-native-spinkit';
import * as Colors from '../../config/Colors';
import {TypeLoading} from '../../config/Constants';

class ProgressLoading extends React.PureComponent {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  getLoading() {
    return this.state.isLoading;
  }

  show() {
    this.setState({isLoading: true});
  }

  hide() {
    if (this.state.isLoading && this._isMounted) {
      this.setState({isLoading: false});
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {style, size, visible, typeLoading, backgroundColor} = this.props;
    const styleContainer =
      typeLoading == TypeLoading.LOAD_MORE
        ? styles.loadingMore
        : styles.loading;
    const type = 'FadingCircleAlt';
    return this.state.isLoading || visible ? (
      <View style={[style || styleContainer, {backgroundColor}]}>
        <Spinner
          isVisible={true}
          size={size || 60}
          type={type}
          color={Colors.redCONMIK}
        />
      </View>
    ) : (
      <View />
    );
  }
}

export default ProgressLoading;

const styles = StyleSheet.create({
  loading: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  loadingMore: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
