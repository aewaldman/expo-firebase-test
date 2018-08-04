import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text,TouchableOpacity, View, Button, } from 'react-native';
import { Camera, Permissions } from 'expo';


export default class TakeVideoScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    cameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  

  async componentWillMount() {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      cameraPermission: cameraPermission.status,
    })
};

  render() {
    if ( this.state.cameraPermission === null ) {
      return <View />;
    } else if (!this.state.cameraPermission === 'granted' ) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  
});