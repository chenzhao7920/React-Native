import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
const Square = (props) =>{
    //{...props} allow to add props
    //conbine local input style and overide by props.style 
    return (
        <TouchableOpacity  onPress={props.onPress.bind(this,props.id)}     >
            <View style={styles.sqStyle}  >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        
    )
};

const styles = StyleSheet.create({
    sqStyle : {
        width: 40,
        height: 40, 
        height: 40, 
        margin:1,
        backgroundColor: 'blue',
   }
});
export default  Square;