import React, {useState} from 'react';
import {View, Text,StyleSheet,Image,Button, Modal} from 'react-native';
import Input from '../components/Input'

const StartGameScreen = props =>{
    const [enteredName, setenteredName] = useState('');
    const [confirm, setConfirm] = useState(false);
    const nameInputHandler = inputName =>{ 
        setenteredName(inputName);
    };
    const resetHandler=() => { setenteredName('');}
    const confirmHandler = () =>{setConfirm(true);console.log("Input name is : " + enteredName);}
    return (
  //     <Modal visible={isAddMode} animationType = "slide" >
            <View style={styles.screen}>
                <Image style={styles.image} source={require('./img/board-game.png')} />
                <Text style={styles.title}>Player Name:</Text>
                <View style={styles.inputContainer}>
                    <Input
                        keyboardType= "default"
                        autoCapitalize = "none"
                        onChangeText={nameInputHandler}
                        value = {enteredName}
                    />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} title="Reset" onPress={resetHandler}/>
                        <Button style={styles.button} title="Confirm" onPress={confirmHandler} />
                    </View>
                </View>
                <View style={styles.startButton}>
                    <Button
                        title="START GAME"
                        color="white"
                        onPress={() =>setIsAddMode(true)}
                    />
                </View>
            </View>
   //     </Modal>
    );
};
const styles= StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems: 'center',
    },
    image:{
        marginTop:100,
        marginBottom:20,
        width:200, 
        height:200,
        alignItems: 'center',
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily: 'Arial',
    },
    inputContainer:{
        width:"60%",
        alignItems:'center',
        justifyContent:'center',
        margin:10,
         
    },
    buttonContainer:{
        width:"70%",
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
    },
    Button:{
        width:100,
    },
    startButton:{
        marginVertical:10,
        width:150,
        height:50,
        backgroundColor:'#37bced',
        paddingVertical:7,
        borderRadius:30,
        
    }
});

export default StartGameScreen;