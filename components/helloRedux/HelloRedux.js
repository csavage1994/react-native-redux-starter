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

class HelloRedux extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello from redux!
        </Text>
        <Text style={styles.container}>
            {this.props.state}
        </Text>
          <Text style={styles.container}>
                where will this be?
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'steelblue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    backgroundColor: 'powderblue',
  },
  button: {
      position: 'absolute',
      bottom: 40,
  },
});

export default connect(state => ({
    state: state.settings.stateTest
  }),
  (dispatch) => ({
    testAction: bindActionCreators(testAction, dispatch)
  })
)(HelloRedux);
