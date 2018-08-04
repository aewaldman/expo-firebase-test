import React from 'react';
import { View, Button } from 'react-native';

export default class TakeVideoComponent extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = { 
        };
    }

    onTakeVideoPress = () => {
        console.log('onTakeVideoPress');
        this.props.navigation.navigate('TakeVideo');
    }
    
   /* uploadImage = async (uri, imageName) => {
            const response = await fetch(uri);
            const blob = await response.blob();
            
            var uid = firebase.auth().currentUser.uid;
            var ref = firebase.storage().ref().child("images/" + uid + "/" + imageName);
            return ref.put(blob);
    }*/

    render() {
           return (
                <View style={{paddingTop:50, alignItems:"center"}}>
                    <Button title="Take Video" onPress={this.onTakeVideoPress} />
                </View>
            );
    }
}