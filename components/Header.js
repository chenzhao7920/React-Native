import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = props =>{
    return (
        <View style={style.header}>
            <Text style={style.headerTitle}>{props.title}</Text>
        </View>
    );
};

const style=StyleSheet.create({
    header: {
        width:'100%', //the full screen
        height: 90,
        paddingTop:36,
        backgroundColor:'#96d0f2',  //#f7287b 玫红
        alignItems:'center',     // alignItem and justifyContent both center 
        justifyContent:'center',  // can make all it's child view in the middle of it
    },
    headerTitle:{
        color:'white',
        fontSize:28,
    }
});

export default Header;