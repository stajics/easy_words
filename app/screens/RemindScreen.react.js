import React, { Component } from 'react';
import {
  ScrollView, Text
} from 'react-native';

export default class RemindScreen extends Component {
    render() {
      return (
        <ScrollView style={{height:100, width: 300}}>
            <Text>{"Remind's body"}</Text>
        </ScrollView>
      );
    }
}
