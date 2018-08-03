import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ImagePicker, Permissions } from 'expo'; 
import * as firebase from 'firebase';


export default class UploadImageComponent extends React.Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        cameraRollPermission: null,
    };


    onUploadPicturePress = async () => {

        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({
            cameraRollPermission: cameraRollPermission.status,
        })
        console.log(cameraRollPermission);
        
        if ( this.state.cameraRollPermission !== 'granted' ) {
            console.log("still waiting");
        }
        if ( this.state.cameraRollPermission === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync();
            console.log(result);
            if (!result.cancelled) {
                this.uploadImage(result.uri, "take-picture");
                console.log("after uploadImage");
               // this.props.navigation.push("UploadImageShow");
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
                    <Button title="Upload picture" onPress={this.onUploadPicturePress} />
                </View>
            );
    }
}