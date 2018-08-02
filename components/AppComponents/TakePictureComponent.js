import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { ImagePicker, Permissions } from 'expo'; 
import * as firebase from 'firebase';


export default class TakePictureComponent extends React.Component {
    static navigationOptions = {
        header: null,
    };

    onTakePicturePress = async () => {

        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        console.log(status);
        if ( status !== 'granted' ) {
            await Permissions.askAsync(Permissions.CAMERA);
        }
        if ( status === 'granted' ) {
            let result = await ImagePicker.launchCameraAsync ();
            console.log(result);
            if (!result.cancelled) {
                this.uploadImage(result.uri, "take-picture");
                console.log("after uploadImage");
            }
        }
        
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
                    <Button title="Take Picture" onPress={this.onTakePicturePress} />
                </View>
            );
    }
}