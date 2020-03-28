import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
export default function App() {
  return (
    // const [isAddMode, setIsAddMode] = useState(true);
    <View style={styles.screen}>
      <Header title="Night Tour" />
        <StartGameScreen title= "Game Screen" />
        
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,  //ensure this view take all the apace it can get
  },
});
