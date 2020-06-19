import React from 'react';
import { View, Text,Modal, Button, StyleSheet } from 'react-native'
import Header from '../components/Header';
import Table from '../components/Table';

const IntroMsgScreen = props => {
    const exitHandler = () => {
        props.isBoardMode(true);
        props.isMessageMode(false);
    }

    return (
        <Modal visible={props.visible} animationType="slide"   >
            <Header title={props.title} />
            <View style={styles.screen}>
                <View style={styles.exit}>
                    <Button style={styles.exitbutton} title="Exit" onPress={exitHandler} />
                </View>

                <Table style={styles.board}>
                    <View >
                       <Text style = {styles.textTitle}>  Game Introduction  </Text>
                       <Text style = {styles.text}>Choose a grid to start. </Text>
                       <Text style = {styles.text}>After selection, a green halo will appear around the selected grid.</Text>
                       <Text style = {styles.text}>Select the next burning point from the aura.</Text>
                       <Text style = {styles.text}>Each time you select, a new aura will be formed.</Text>
                       <Text style = {styles.text}>The place that has been burnt cannot be lit again.</Text>
                       <Text style = {styles.text}>Burn as many grids as possible.</Text>
                       <Text style = {styles.text}>The challenge begins! </Text>
                    </View>
                </Table>

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding:10,
        alignItems: 'center',
    },
    exit:{
        height:'5%',
        alignSelf:'flex-end',
        fontFamily: 'open-sans',
    },
    board:{   
        width:380,
        height: 380,
        flexWrap: 'wrap', 
        marginVertical:10,     
   },
   textTitle:{
        alignSelf:'flex-start',
        fontFamily: 'open-sans',
        fontSize: 32,
   },
   text:{
         fontSize: 18,
         marginVertical: 3,
   }
})

export default IntroMsgScreen;