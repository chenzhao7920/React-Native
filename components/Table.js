import React from 'react';
import { View, StyleSheet } from 'react-native';

const Table = props => {
  return (
    <View style={{ ...styles.table, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  table: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
  }
});

export default Table;
