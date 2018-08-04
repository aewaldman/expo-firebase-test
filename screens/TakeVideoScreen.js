import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text,TouchableOpacity, View, Button, } from 'react-native';
import { Camera, Permissions } from 'expo';


export default class TakeVideoScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    cameraPermission: null,
    cameraAudioRecording: null,
    type: Camera.Constants.Type.back,
  };

  

  async componentWillMount() {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraAudioRecording = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({
      cameraPermission: cameraPermission.status,
      cameraAudioRecording: cameraAudioRecording.status,
    })
};

  render() {
    if ( this.state.cameraPermission === null || this.state.cameraAudioRecording === null ) {
      return <View />;
    } else if (!this.state.cameraPermission === 'granted' && !this.state.cameraAudioRecording === 'granted') {
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
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                    // need to create the ref to the camera and then do the recordAsync 
                    // then need to capture the promise with the .then 
                    
                    //below here doesn't work
                    //let result = Camera.recordAsync({ maxDuration: 5, });
                    //console.log(result);
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Record{' '}
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