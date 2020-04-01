import React,{useState} from 'react';
import {View, Text, StyleSheet,Modal,Button} from 'react-native';
import Header from '../components/Header';
import Table from '../components/Table';

const Board = props => {
    console.log(props.visible)
    
    const [countStep, setCountStep] = useState(0);
    const [isWin, setIsWin] = useState(false);
    const [isClickAble, setIsClickAble] = useState(true);
    const [laststep,setLastStep] = useState(-1);
    const [squares, setSquares] = useState([]);
    const Square = (num) => {
        const sqStyle = {
          width: 40,
          height: 40, 
          height: 40, 
          margin:1,
          backgroundColor: 'blue',
        };
           
         
        return <View style={sqStyle} key = {num}  > 
                   <Text>{num}</Text>
              </View>;
    };

    // const [squares, setSquares] = useState([Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
    //     Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
    //     Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
    //     Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
    //     Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
    //     Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
    //     Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),
    //     Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),]);
     
    
    const boardHandler=()=>{
        for(let i = 0; i < 64 ;i++){ 
             
            setSquares(currentSquares => [...currentSquares, Square(i)]);
        }
         
    }
    const exitHandler = () =>{
        props.exitBoard(false);
        setSquares([]);
    }
    
    return(
        <Modal visible={props.visible} animationType="slide"  onShow = {boardHandler} >
            <Header title="Night Tour" />
            <View style={styles.screen}>
                <View style = {styles.exit}>
                    <Button style={styles.exitbutton} title="Exit" onPress={exitHandler}/>
                </View>
               
                <View >
                    <Text style = {styles.counter}>Total Step: {countStep}</Text>
                 </View>
               
                <Table style = {styles.board}>
                    {squares.map(elem => elem)}    
                </Table>
                 
                <View  style = {styles.button}>
                    <Button
                        title="PALY AGAIN"
                        color="white"
                        color="white"
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
        fontSize:18,
        marginVertical:15,  
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