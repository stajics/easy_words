import React, { Component } from 'react';
import {
  ScrollView, Text
} from 'react-native';

export default class ProfileScreen extends Component {
    render() {
      return (
        <ScrollView style={{height:100, width: 300}}>
            <Text>{"Profile's body"}</Text>
        </ScrollView>
      );
    }
}
