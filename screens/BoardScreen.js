import React,{useState} from 'react';
import {View, Text, StyleSheet,Modal,Button,TouchableOpacity,FlatList} from 'react-native';
import Header from '../components/Header';
import Table from '../components/Table';
import Square from '../components/Square';
const Board = props => {
    console.log(props.visible)
    
    const [countStep, setCountStep] = useState(0);
    const [isWin, setIsWin] = useState(false);
    const [isClickAble, setIsClickAble] = useState(true);
    const [pastStep,setpastStep] = useState([]);
    const [squares, setSquares] = useState([]);
    //set Square format
    // const Square = (num) => {
    //     const sqStyle = {
    //       width: 40,
    //       height: 40, 
    //       height: 40, 
    //       margin:1,
    //       backgroundColor: 'blue',
    //     };   
    //     return (
    //         <TouchableOpacity onPress={onPress} key={num} >
    //             <View style={sqStyle}    >
    //                 <Text>{num}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // };
    //create board when Modal onShow , **** must use let ****
    const boardHandler=()=>{
        for(let i = 0; i < 64 ;i++){ 
            let idx = i;    
            setSquares(currentSquares => [...currentSquares, {id:idx.toString(), value:i}]);
        }
        console.log(squares.length);     
    }
    const exitHandler = () =>{
        props.exitBoard(false);
        setSquares([]);
        setpastStep([]);
    }
    const onPressHandler = (itemId) =>{
        setCountStep(prevCount => prevCount + 1);
        console.log('click ' + itemId);
        setpastStep(currentSteps =>[...currentSteps, itemId])
        console.log('currentSteps ' + pastStep);
    } 
    return(
        <Modal visible={props.visible} animationType="slide"  onShow = {boardHandler} >
            <Header title="Welcome to Knight's Tour"/>
            <View style={styles.screen}>
                <View style = {styles.exit}>
                    <Button style={styles.exitbutton} title="Exit" onPress={exitHandler}/>
                </View>
                <View >
                    <Text style = {styles.counter}>Total Step: {countStep}</Text>
                </View>          
                {/* <Table style={styles.board}>
                    {squares.map(elem => elem)}
                </Table> */}
                <Table style={styles.board}>
                <FlatList 
                    horizontal = {false}
                    numColumns = {8}
                    data = {squares}
                    keyExtractor = {(item,index)=>item.id}
                    renderItem = {itemData =>
                        <Square
                            id = {itemData.item.id}
                            onPress = {onPressHandler}
                            title = {itemData.item.value}
                        />
                    }
                />
                </Table>
                <View  style = {styles.button}>
                    <Button
                        title="PALY AGAIN"
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