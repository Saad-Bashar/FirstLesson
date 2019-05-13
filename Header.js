import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: 60, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#fff' }}>{this.props.title}{this.props.value}</Text>
        {this.props.customFunction()}
        
      </View>
    );
  }
}
