import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction } from '../../actions/actions';

class Header extends Component {

  render() {
    return (
      <View style={styles.test}>
         <Text style={styles.container}>
            Spotfinder
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginLeft: 10,
    fontSize: 30,
    color: 'white',
  },
  test: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'blue',
    height: 60,
    alignItems: 'center',
  }
});

export default connect(state => ({
    state: state.settings.stateTest
  }),
  (dispatch) => ({
    testAction: bindActionCreators(testAction, dispatch)
  })
)(Header);
