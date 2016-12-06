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
import MapView from 'react-native-maps';

class Map extends Component {

  render() {
   const { region } = this.props;
   console.log(region);

   return (
     <View style ={styles.container}>
       <MapView
         style={styles.map}
         region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   bottom: 0,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});


export default connect(state => ({
    state: state.settings.stateTest
  }),
  (dispatch) => ({
    testAction: bindActionCreators(testAction, dispatch)
  })
)(Map);
