import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const Square = (props) => {
    if(props.selected) 

    return (
        <TouchableOpacity onPress={props.onSelect.bind(this, props.id)}  >
            {/* #96d0f2 blue  ; #f428f7 pink ;#A9F7C3 green*/}
            <View style={[styles.sqStyle, { backgroundColor: (props.selected ? '#d925db' : (props.possible ? '#99f79b' : '#96d0f2')) }]}  >
                 <Text>{props.count}</Text>
            </View>
        </TouchableOpacity>
    )
    else return(
        <TouchableOpacity onPress={props.onSelect.bind(this, props.id)}  >
            {/* #96d0f2 blue  ; #f428f7 pink ;#A9F7C3 green*/}
            <View style={[styles.sqStyle, { backgroundColor: (props.selected ? '#d925db' : (props.possible ? '#99f79b' : '#96d0f2')) }]}  >
                 
            </View>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    sqStyle: {
        width: 40,
        height: 40,
        height: 40,
        margin: 1,
        backgroundColor: 'blue',
    }
});
export default Square;