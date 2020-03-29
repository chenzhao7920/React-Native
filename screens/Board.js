import React,{useState} from 'react';
import {View, Text, StyleSheet,Modal,Button} from 'react-native';
import Header from '../components/Header';
const Board = props => {
    console.log(props.visible)
    
    const [countStep, setCountStep] = useState('');
    const [isWin, setIsWin] = useState(false);
    const [isClickAble, setIsClickAble] = useState(true);
    const [laststep,setLastStep] = useState(-1);
    const Square = () => {
        const sqStyle = {
          width: 40,
          height: 40,
          margin:1,
          backgroundColor: 'blue',
        };
        return <View style={sqStyle}  {...props}/>;
    };
    const [squares, setSquares] = useState([Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
        Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
        Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
        Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
        Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
        Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
        Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
        Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),]);

    const boardHandler=(squares)=>{
         squares.map(elem=>{}) 
        console.log(squares);
    }
    return(
        <Modal visible={props.visible} animationType="slide"   >
            <Header title="Night Tour" />
            <View style={styles.screen}>
                <View style = {styles.exit}>
                    <Text>Button on right</Text>
                </View>
                <View style = {styles.counter}>
                    <Text>counter in middle</Text>
                </View>
                <View style = {styles.board}> 
                    {squares.map(elem => elem)}    
                </View>
                <View style = {styles.tryAgain}>
                    <Text> Try again button </Text>                   
                </View>
            </View>
        </Modal>
    );
}
 
const styles = StyleSheet.create({
    screen:{
        flex:1,  
        padding:10,
        alignItems: 'center',
         
    },
    exit:{
        height:'5%',
        alignSelf:'flex-end',
    },
    counter:{
        width:200,
        height:30,
        backgroundColor:'#ccc',
        marginVertical:20,  
    },
    board:{
        padding:10,
        width:380,
        height: 380,
        backgroundColor:'white',
        borderColor: 'blue',
        flexDirection:'row',
        justifyContent:'center',
        borderWidth: 1,
        flexWrap: 'wrap',
    },
     
});
export default Board;