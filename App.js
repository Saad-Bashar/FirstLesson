import React from 'react';
import { View, Text, Button } from 'react-native';
import Flex from './Flex';
import FlexDirection from './FlexDirection';
import JustifyContent from './JustifyContent';

export default class App extends React.Component {
  

  render() {  
    return (
      <View style={styles.container}>
        
        {/* <Flex /> */}

        {/* <FlexDirection /> */}

        <JustifyContent />

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
    // flex: 1,
    width: 50,
    height: 50
  },

  box2: {
    backgroundColor: '#FAA030',
    // flex: 1,
    width: 50,
    height: 50
  }, 

  box3: {
    backgroundColor: '#32B76C',
    // flex: 1,
    width: 50,
    height: 50
  }
}