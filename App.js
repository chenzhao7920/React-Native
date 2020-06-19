import React, {useState}from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import Board from './screens/BoardScreen';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import IntroMsgScreen from './screens/IntroMsgScreen';

//return the fetched fonts to main program
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fronts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fronts/OpenSans-Bold.ttf'),
  })
}
export default function App() {
  const [isboardMode, setIsBoardMode] = useState(false);
  const [dataloaded, setDataloaded] = useState(false);
  const [isMessageMode, setMessageMode] = useState(false);
  //Make sure fetchFonts before everything else happen.
  if(!dataloaded){
    //startAsync accept a function and this function must return a promise
    // and expo will automaticly listen to the promise and when the promise done
    // onFinish will setDataloaded to true.  
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataloaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }
  //transefer state of "isboardMode". 
  const onboardModeHandler = (mode)=> {setIsBoardMode(mode)};
  
  const onMessageModeHandler = (mode) =>{setMessageMode(mode)};

  let content = <StartGameScreen  onboardMode={onboardModeHandler} />
  
  if (isboardMode == true && isMessageMode == false) {
      content = <Board title="Welcome to Knight's Tour" visible={isboardMode} isBoardMode={onboardModeHandler} isMessageMode={onMessageModeHandler} />
  }else if (isMessageMode == true){
      content = <IntroMsgScreen title="Game Rules" visible={isMessageMode} isBoardMode={onboardModeHandler} isMessageMode={onMessageModeHandler}/> 
  }

  return (
    <View style={styles.screen}>
        <Header title="Knight's Tour" />
        {content}
        {/* <StartGameScreen  onboardMode={onboardModeHandler} />
        <Board title="Welcome to Knight's Tour" visible={isboardMode} isBoardMode = {onboardModeHandler} isMessageMode = {onMessageModeHandler}/>
        <MessageScreen    />  */}
    </View>
  );
} 

const styles = StyleSheet.create({
  screen: {
    flex: 1,  //ensure this view take all the apace it can get
  },
});