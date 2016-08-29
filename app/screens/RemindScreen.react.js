import React, { Component } from 'react';
import {
  ScrollView, Text
} from 'react-native';

export default class RemindScreen extends Component {
    render() {
      return (
        <ScrollView>
            <Text>{"Remind's body"}</Text>
        </ScrollView>
      );
    }
}
