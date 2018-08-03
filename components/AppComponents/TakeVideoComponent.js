import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Camera, Permissions } from 'expo'; 
import * as firebase from 'firebase';


export default class TakeVideoComponent extends React.Component {
    static navigationOptions = {
        header: null,
    };

    onTakeVideoPress = () => {
      this.props.navigation.navigate("TakeVideoScreen");
    }
    
    uploadImage = async (uri, imageName) => {
            const response = await fetch(uri);
            const blob = await response.blob();
            
            var uid = firebase.auth().currentUser.uid;
            var ref = firebase.storage().ref().child("images/" + uid + "/" + imageName);
            return ref.put(blob);
    }

    render() {
           return (
                <View style={{paddingTop:50, alignItems:"center"}}>
                    <Button title="Take Video" onPress={this.onTakeVideoPress} />
                </View>
            );
    }
}