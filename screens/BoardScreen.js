import React,{useState} from 'react';
import {View, Text, StyleSheet,Modal,Button,TouchableOpacity,FlatList} from 'react-native';
import Header from '../components/Header';
import Table from '../components/Table';
import Square from '../components/Square';

const Board = props => {
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
    const giveOption = (id) =>{
        var idx = parseInt(id);
        var i = idx % 8; //col
        var j = parseInt(idx / 8); //row
        //possition 0
        if ((i + 2) <= 7 && (j - 1) >= 0) {
            var n0 = (i + 2) + (j - 1) * 8;
            if (gezi[n0] !== "full") {
                possible.push(n0);
                gezi[n0] = "possible";
                console.log("the possible button id n0 " + n0);
            }
        }
        //possition 1
        if ((i + 1) <= 7 && (j - 2) >= 0) {
            var n1 = (i + 1) + (j - 2) * 8;
            // possible.push(n2);
            if (gezi[n1] !== "full") {
                possible.push(n1);
                gezi[n1] = "possible";
                console.log("the possible button id n1 " + n1);
            }
        }
        //possition 2
        if ((i - 1) >= 0 && (j - 2) >= 0) {
            var n2 = (i - 1) + (j - 2) * 8;
            // possible.push(n2);
            if (gezi[n2] !== "full") {
                possible.push(n2);
                gezi[n2] = "possible";
                console.log("the possible button id n2 " + n2);
            }

        }
        //possition 3
        if ((i - 2) >= 0 && (j - 1) >= 0) {
            var n3 = (i - 2) + (j - 1) * 8;
            // possible.push();
            if (gezi[n3] !== "full") {
                possible.push(n3);
                gezi[n3] = "possible";
                console.log("the possible button id n3 " + n3);
            }

        }
        //possition 4
        if ((i - 2) >= 0 && (j + 1) <= 7) {
            var n4 = (i - 2) + (j + 1) * 8;
            // possible.push();
            if (gezi[n4] !== "full") {
                possible.push(n4);
                gezi[n4] = "possible";
                console.log("the possible button id n4 " + n4);
            }
        }
        //possition 5
        if ((i - 1) >= 0 && (j + 2) <= 7) {
            var n5 = (i - 1) + (j + 2) * 8;
            // possible.push();
            if (gezi[n5] !== "full") {
                possible.push(n5);
                gezi[n5] = "possible";
                console.log("the possible button id n5 " + n5);
            }
        }
        //possition 6
        if ((i + 1) <= 7 && (j + 2) <= 7) {
            var n6 = (i + 1) + (j + 2) * 8;
            // possible.push();
            if (gezi[n6] !== "full") {
                possible.push(n6);
                gezi[n6] = "possible";
                console.log("the possible button id n6 " + n6);
            }
        }
        //possition 7
        if ((i + 2) <= 7 && (j + 1) <= 7) {
            var n7 = (i + 2) + (j + 1) * 8;
            // possible.push();
            if (gezi[n7] !== "full") {
                possible.push(n7);
                gezi[n7] = "possible";
                console.log("the possible button id n7 " + n7);
            }
        }
        console.log("after set knight the possible button.size is " + possible.length);
        for (var i = 0; i < possible.length; i++) {
            var id = possible[i];
            $("#" + id).css("background", "#8de3a4");
            console.log("the possible button id is " + id);
        }
        // for(var i = 0; i< gezi.length;i++){
        //     console.log(gezi[i]);
        // }
        return possible.length;
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