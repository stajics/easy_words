import React, { Component } from 'react';
import {
  View, Image, StyleSheet, TouchableOpacity, Text
} from 'react-native';
import Icon from './Icon.react';


export default class CustomRow extends Component {
    propTypes: {
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      containerStyle: View.PropTypes.style,
      imageStyle: Image.PropTypes.style,
      source: Image.PropTypes.ImageSourcePropType.isRequired
    }

    constructor(props){
      super(props);
    }
    render() {
      return (
          <View style={{justifyContent: 'space-between', flex:1, backgroundColor: 'white', height: 50, flexDirection: 'row'}}>
            <Text>AAAAA</Text>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  defaultDimensions: {
    width: 50,
    height: 50
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'space-around',
    resizeMode: 'stretch'
  }
});
