import React,{useState} from 'react';
import {View, Text, StyleSheet,Modal,Button,TouchableOpacity,FlatList} from 'react-native';
import Header from '../components/Header';
import Table from '../components/Table';
import Square from '../components/Square';

const Board = props => {
    const [countStep, setCountStep] = useState(0);
    const [isWin, setIsWin] = useState(false);
    const [isClickAble, setIsClickAble] = useState(true); 
    const [squares, setSquares] = useState([]);
    const [selected, setSelected] = React.useState(new Map());
    const [gezi, setGezi] = useState([]);
    const [possible, setPossibel] = useState([]);
    const [pastStep, setPastStep] = useState([]);
    //create board when Modal onShow , **** must use let ****
    const boardHandler=()=>{
        console.log("===========Welcome to Knight Tour==============")
        for(let i = 0; i < 64 ;i++){ 
            let idx = i;    
            setSquares(currentSquares => [...currentSquares, {id:idx.toString(), value:i}]);
            setGezi(currentGezi => [...currentGezi, "empty"]);
        }
    }
    const exitHandler = () =>{
        props.isBoardMode(false);
        setCountStep(0);
        setSquares([]); 
        setSelected(new Map());
        setGezi([]);
        setPossibel([]);
        setPastStep([]);
        setIsClickAble(true);    
    }

    //add callbakc function to each square
    const onSelectHandler = (id)=>{
            if(isClickAble === false)
                return;
            console.log("======Processing gezi " + id + " =========" );
            //if game just start
            if(countStep === 0){
                console.log('click ' + id);
                setSquare(id);
                const newSelected = new Map(selected);
                newSelected.set(id, !selected.get(id));
                setSelected(newSelected);
                setCountStep(prevCount => prevCount + 1);
                giveOption(id);             
                console.log("possible button id is " + possible);      
            }else{
                if(gezi[id] === 'full' || gezi[id] === 'empty'){ return; }
                else {
                    //clear possible array and reset gezi state( except current one)
                    console.log("Right now the possible button size is " + possible.length);
                    for (var i = 0; i < possible.length; i++) {
                        var idx = possible[i];
                        gezi[idx] = "empty";
                        console.log("gezi " + idx + " is " + gezi[idx]);  
                    }
                    possible.splice(0, possible.length);
                    console.log('click ' + id);
                    
                    setSquare(id);
                    const newSelected = new Map(selected);
                    newSelected.set(id, !selected.get(id));
                    setSelected(newSelected);
                    setCountStep(prevCount => prevCount + 1);
                    giveOption(id); 
                    if(possible.length > 0) {
                        console.log("possible button id is " + possible);  
                    } else{
                        console.log("Game Over  "    ) ;
                        setIsClickAble(false);        
                    } 
                    return; 
                }
            }
            return;    
    }

    //这个函数接受一个格子ID， 和颜色， 然后把gezi状态设为full
    function setSquare(id) {
        var idx = parseInt(id);
        if (gezi[idx] !== "empty") {
            return false;
        } else {
            gezi[idx] = "full";
            setPastStep(currentSteps =>[...currentSteps, idx]);
            console.log("Successful set gezi " + idx + " to full");   
            return true;
        }
    }
    //这个函数接受一个格子ID， 算出周边可选的格子（刨除已选过的格子），改变格子颜色作为用户提示b，b
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
            }
        }
        //possition 1
        if ((i + 1) <= 7 && (j - 2) >= 0) {
            var n1 = (i + 1) + (j - 2) * 8;
            if (gezi[n1] !== "full") {
                possible.push(n1);
                gezi[n1] = "possible";               
            }
        }
        //possition 2
        if ((i - 1) >= 0 && (j - 2) >= 0) {
            var n2 = (i - 1) + (j - 2) * 8;
            if (gezi[n2] !== "full") {
                possible.push(n2);
                gezi[n2] = "possible";              
            }
        }
        //possition 3
        if ((i - 2) >= 0 && (j - 1) >= 0) {
            var n3 = (i - 2) + (j - 1) * 8;
            if (gezi[n3] !== "full") {
                possible.push(n3);
                gezi[n3] = "possible";                
            }
        }
        //possition 4
        if ((i - 2) >= 0 && (j + 1) <= 7) {
            var n4 = (i - 2) + (j + 1) * 8;
            if (gezi[n4] !== "full") {
                possible.push(n4);
                gezi[n4] = "possible";               
            }
        }
        //possition 5
        if ((i - 1) >= 0 && (j + 2) <= 7) {
            var n5 = (i - 1) + (j + 2) * 8;
            if (gezi[n5] !== "full") {
                possible.push(n5);
                gezi[n5] = "possible";              
            }
        }
        //possition 6
        if ((i + 1) <= 7 && (j + 2) <= 7) {
            var n6 = (i + 1) + (j + 2) * 8;
            if (gezi[n6] !== "full") {
                possible.push(n6);
                gezi[n6] = "possible";             
            }
        }
        //possition 7
        if ((i + 2) <= 7 && (j + 1) <= 7) {
            var n7 = (i + 2) + (j + 1) * 8;
            // possible.push();
            if (gezi[n7] !== "full") {
                possible.push(n7);
                gezi[n7] = "possible";                
            }
        }
         
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
                <Table style={styles.board}>
                    <FlatList
                        horizontal={false}
                        numColumns={8}
                        data={squares}
                        keyExtractor={(item, index) => item.id}
                        extraData={[selected, possible,countStep]} //make sure FlatList itself will re-render when the state changes
                        renderItem={itemData =>
                     
                            <Square
                                id={itemData.item.id}
                                title={itemData.item.value}
                                selected = {!!selected.get(itemData.item.id)}
                                possible = {!!possible.includes(parseInt(itemData.item.id))}
                                onSelect = {onSelectHandler}
                                count = {countStep}
                            />
                        }
                    />
                </Table>
                <View  style = {styles.button}>
                    <Button
                        title="PALY AGAIN"
                        color="white"
                        onPress={()=>{
                            exitHandler(); 
                            props.isBoardMode(true);
                            boardHandler();
                        }}
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