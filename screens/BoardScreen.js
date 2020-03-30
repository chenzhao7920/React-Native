import React,{useState} from 'react';
import {View, Text, StyleSheet,Modal,Button} from 'react-native';
import Header from '../components/Header';
import Table from '../components/Table';
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
    const exitHandler = () =>{
        
    }
    return(
        <Modal visible={props.visible} animationType="slide"   >
            <Header title="Night Tour" />
            <View style={styles.screen}>
                <View style = {styles.exit}>
                    <Button style={styles.exitbutton} title="Exit" onPress={exitHandler}/>
                </View>
                <View style = {styles.counter}>
                    <Text>counter in middle</Text>
                </View>
                <Table style = {styles.board}>
                    {squares.map(elem => elem)}    
                </Table>
                 
                <View  style = {styles.button}>
                    <Button
                        title="START GAME"
                        color="white"
                        onPress={()=>{}}
                    />
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
         width:380,
         height: 380,
         flexWrap: 'wrap', 
         marginVertical:20,     
    },
    exitbutton:{
        width:100,
    },
    button:{
        marginVertical:20,
        width:150,
        height:50,
        backgroundColor:'#37bced',
        paddingVertical:7,
        borderRadius:30,
        
    } 
});
export default Board;