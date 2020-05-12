import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button,  Alert, TouchableOpacity } from 'react-native';
import Input from '../components/Input'

const StartGameScreen = props => {
    const [enteredName, setenteredName] = useState('');
    const [confirm, setConfirm] = useState(false);

    const nameInputHandler = inputName => {
        setenteredName(inputName);
    };
    const resetHandler = () => {
        setenteredName('');
        setConfirm(false);
    }
    const confirmHandler = () => { setConfirm(true); console.log("Input name is : " + enteredName); }

    const startHandler = () => {
        if (confirm === false) {
            Alert.alert('Invalid', 'Need to Confirm Player Name', [{ text: 'Ok', style: 'destructive', onPress: resetHandler }])
        }
        if (confirm == true) {
            props.onboardMode(confirm);
        }
        setConfirm(false);
    }
    return (
        <View style={styles.screen}>
            <Image style={styles.image} source={require('./img/board-game.png')} />
            <Text style={styles.title}>Player Name:</Text>
            <View style={styles.inputContainer}>
                <Input
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={nameInputHandler}
                    value={enteredName}
                />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Reset" onPress={resetHandler} />
                    <Button style={styles.button} title="Confirm" onPress={confirmHandler} />
                </View>
            </View>
            
            <View style={styles.startButContainter}>
                <TouchableOpacity
                    style={styles.loginScreenButton}
                    onPress={startHandler}
                    underlayColor='#fff'>
                    <Text style={styles.startText}>START</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 3,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        marginTop: '15%',
        marginBottom: '5%',
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        // fontFamily: 'Arial',
        fontFamily: 'open-sans',
    },
    inputContainer: {
        width: "60%",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,

    },
    buttonContainer: {
        width: "70%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,  
    },
    Button: {
        width: '50%',
        fontFamily: 'open-sans',
    },
    startButton:{
        width: '50%',
        justifyContent: 'center',
        marginTop:30,
    },
    loginScreenButton:{
        width: 125,
        marginRight:40,
        marginLeft:40,
        marginTop:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#4BBCE7',
        borderRadius:30,
        borderWidth: 1,
        borderColor: '#fff'
      },
      startText:{
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10,
          fontFamily: 'open-sans',
          fontSize:18,
      }
});

export default StartGameScreen;