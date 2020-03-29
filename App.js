import React, {useState}from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import Board from './screens/Board'
export default function App() {
  const [isboardMode, setIsBoardMode] = useState(false);
  const onboardModeHandler = ()=> {setIsBoardMode(true)};
  return (
    <View style={styles.screen}>
      <Header title="Night Tour" />
        <StartGameScreen title= "Game Screen" onboardMode={onboardModeHandler} />
        <Board visible={isboardMode} />
         
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,  //ensure this view take all the apace it can get
  },
});