import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native'
 

const MessageScreen = props=>{
    const exitHandler = () =>{
        props.isBoardMode(true);
        props.isMessageMode(false);   
    }

    return (
        <View style = {styles.screen}>
            <View style = {styles.exit}>
                    <Button style={styles.exitbutton} title="Close"  onPress={exitHandler} />                    
            </View>
            <Text> Game Rule </Text>       
        </View>
    );
};

const styles = StyleSheet.create({
    exit:{
        height:'5%',
        alignSelf:'flex-end',
        fontFamily: 'open-sans',
    },
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MessageScreen;