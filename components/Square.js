import React ,{useState} from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';

const Square = (props) =>{
    // const[squareColor, setSquareColor] = useState('gray');
    // //{...props} allow to add props
    // //conbine local input style and overide by props.style 
     
    // const colerHealper = ()=>{
    //     console.log("set square " + idx + " to white");	
    //     let idx = parseInt(props.id);
    //     let i = idx % 8; //col
    //     let j = parseInt(idx / 8); //row
    //     if((i + j)%2 == 0) {
    //         setSquareColor('white');	
             
    //     }
    //     else{
    //         setSquareColor('white'); 
    //         console.log("set square " + idx + " to white");	
    //     }
   
    //  }
    return (
        <TouchableOpacity  onPress={props.onSelect.bind(this,props.id)}  >
            <View  style={[styles.sqStyle,{backgroundColor: (props.selected? 'pink': (props.possible? 'green':'blue'))}]}  >
                <Text>{props.id}</Text>
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