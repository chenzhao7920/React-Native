import React, {useState}from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import Board from './screens/BoardScreen'
export default function App() {
  const [isboardMode, setIsBoardMode] = useState(false);
  const onboardModeHandler = (mode)=> {setIsBoardMode(mode)};
  const exitBoardHandler = (mode)=>{
       setIsBoardMode(mode);
   }
  return (
    <View style={styles.screen}>
      <Header title="Night Tour" />
        <StartGameScreen title= "Game Screen" onboardMode={onboardModeHandler} />
        <Board visible={isboardMode} exitBoard = {exitBoardHandler}/>
         
    </View>
  );
} 

const styles = StyleSheet.create({
  screen: {
    flex: 1,  //ensure this view take all the apace it can get
  },
});