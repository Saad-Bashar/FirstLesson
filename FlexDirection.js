import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from './Header';

export default class App extends React.Component {
  

  render() {  
    return (
      <View style={styles.container}>
        
        <View style={styles.elementContainer}>
          
          <View style={styles.box1} /> 

          <View style={styles.box2} />

          <View style={styles.box3} />

        </View>

      </View>
    )
  }
}

// 1 + 2 + 3 = 6

// 1/6 2/6 3/6


const styles = {
  container: {
    marginTop: 48,
    flex: 1,
    
  },

  elementContainer: {
    flex: 1,
    margin: 25,
    backgroundColor: '#ecf5fd',
    flexDirection: 'column', // column, row, row-reverse, column-reverse
  },

  box1: {
    backgroundColor: '#EE2C38',
    width: 50,
    height: 50
  },

  box2: {
    backgroundColor: '#FAA030',
    width: 50,
    height: 50
  }, 

  box3: {
    backgroundColor: '#32B76C',
    width: 50,
    height: 50
  }
}