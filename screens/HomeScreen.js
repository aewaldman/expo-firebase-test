import React from 'react';
import { StyleSheet, View, Button, } from 'react-native';
import { 
    UploadImageComponent, 
    TakePictureComponent, 
    TakeVideoComponent,
  } from '../components/AppComponents';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

onSignOutPress = () => {
  firebase.auth().signOut();
}

onTakeVideoPress = () => {
  console.log('onTakeVideoPress');
  this.props.navigation.navigate('TakeVideo');
}

  render() {
    return (
      <View style={{paddingTop:20, alignItems:"center" }}>
        <View style={{paddingTop:50}} />
        <UploadImageComponent />
        <View style={{paddingTop:20}} />
        <TakePictureComponent />
        <View style={{paddingTop:20}} />
        <View style={{paddingTop:50, alignItems:"center"}}>
                    <Button title="Take Video" onPress={this.onTakeVideoPress} />
        </View>        
        <View style={{paddingTop:100}} />
        <Button title="Sign out" onPress={this.onSignOutPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
