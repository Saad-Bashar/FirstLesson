import React from 'react';
import { View, Text, Button } from 'react-native';


export default class Flex extends React.Component {
  

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


const styles = {
  container: {
    marginTop: 48,
    flex: 1,
    
  },

  elementContainer: {
    flex: 1,
    margin: 25,
    backgroundColor: '#ecf5fd',
    
  },

  box1: {
    backgroundColor: '#EE2C38',
    flex: 1,
  
  },

  box2: {
    backgroundColor: '#FAA030',
    flex: 1,
    
  }, 

  box3: {
    backgroundColor: '#32B76C',
    flex: 1,
    
  }
}