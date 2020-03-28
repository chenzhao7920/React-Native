import React from 'react';
import {TextInput,StyleSheet} from 'react-native';
const Input = props =>{
    //{...props} allow to add props
    //conbine local input style and overide by props.style 
    return<TextInput  {...props} style = {{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
    input:{
        width:"80%",
        height:30,
        paddingHorizontal:10,
        borderColor:'blue',
        backgroundColor:'#ccc',
        borderRadius:10,
    }
});
export default Input;