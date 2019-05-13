import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from './Header';
import styles from './JustifyContentStyles';

export default class JustifyContent extends React.Component {
  

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


