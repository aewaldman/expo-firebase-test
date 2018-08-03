import React from 'react';
import { Image, View, Text, Button, Alert } from 'react-native';
import { ImagePicker, Permissions } from 'expo'; 
import * as firebase from 'firebase';


export default class UploadImageShow extends React.Component {


    render() {
           return (
                <View style={{paddingTop:50, alignItems:"center"}}>
                    <Text>Firebase Image</Text>
                    <Image source= {{ uri: ''}} />
                    <View style={{paddingTop:50}} />
                    <Text>Local Gallery Image</Text>
                    <Image source= {{ uri: ''}} />
                </View>
            );
    }
}