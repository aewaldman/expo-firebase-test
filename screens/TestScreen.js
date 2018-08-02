import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text,TouchableOpacity, View, Button, } from 'react-native';
import { TestComponent } from '../components/AppComponents';
import TakePictureComponent from '../components/AppComponents/TakePictureComponent';
import * as firebase from 'firebase';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

onSignOutPress = () => {
  firebase.auth().signOut();
}

  render() {
    return (
      <View style={{paddingTop:20, alignItems:"center" }}>
        <View style={{paddingTop:100}} />
        <TestComponent />
        <View style={{paddingTop:20}} />
        <TakePictureComponent />
        <View style={{paddingTop:100}} />
        <Button title="Sign out" onPress={this.onSignOutPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
