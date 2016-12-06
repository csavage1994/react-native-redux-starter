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
      <View style={styles.container}>
         <Text>
            Awooooooooo!
         </Text>
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
  }
});

export default connect(state => ({
    state: state.settings.stateTest
  }),
  (dispatch) => ({
    testAction: bindActionCreators(testAction, dispatch)
  })
)(Header);
