import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text,TouchableOpacity, View, Button, } from 'react-native';
import { Camera, 
  Permissions,
} from 'expo';
import * as firebase from 'firebase';

export default class TakeVideoScreen extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      cameraPermission: null,
      cameraAudioRecording: null,
      type: Camera.Constants.Type.back,
      isRecording: false,
    }
  }

  stopRecording = () => {
    this.camera.stopRecording();
    this.setState({ isRecording: false });
    };

  startRecording = async () => {
    let result = await this.camera.recordAsync( { maxDuration: 5 } );
    this.setState({ isRecording: true });
    console.log(result);
    this.uploadVideo(result.uri, "uploaded-video");
    console.log("upload video done");
  };

  async componentWillMount() {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraAudioRecording = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({
      cameraPermission: cameraPermission.status,
      cameraAudioRecording: cameraAudioRecording.status,
    })
  };

  uploadVideo = async (uri, videoName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    
    var uid = firebase.auth().currentUser.uid;
    var ref = firebase.storage().ref().child("video/" + uid + "/" + videoName);
    return ref.put(blob);
}

  render() {
    if ( this.state.cameraPermission === null || this.state.cameraAudioRecording === null ) {
      return <View />;
    } else if (!this.state.cameraPermission === 'granted' && !this.state.cameraAudioRecording === 'granted') {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            ref = { ref => { this.camera = ref ;}}
            style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
          
              }}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'baseline',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 12, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
              
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  
                  alignSelf: 'flex-end',
                  alignItems: 'baseline',
                }}
                onPress={this.startRecording}
                >
                <Text
                  style={{ fontSize: 12, marginBottom: 15, color: 'white' }}>
                  {' '}Start Recording{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
               
                  alignSelf: 'flex-end',
                  alignItems: 'baseline',
                }}
                onPress={this.stopRecording}
                >
                <Text
                  style={{ fontSize: 12, marginBottom: 15, color: 'white' }}>
                  {' '}Stop Recording{' '}
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