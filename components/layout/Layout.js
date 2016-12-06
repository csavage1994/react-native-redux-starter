import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import Header from '../header/Header';
import Map from '../map/Map';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction } from '../../actions/actions';

class Layout extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}/>
        <Map style={styles.map}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  map: {
    flex: 4,
  },
  head: {
    flex: 1,
  },

});

export default connect(state => ({
    state: state.settings.stateTest
  }),
  (dispatch) => ({
    testAction: bindActionCreators(testAction, dispatch)
  })
)(Layout);
