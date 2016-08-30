import React, { Component } from 'react';
import {
  ScrollView, Text, View, TouchableOpacity, UIManager, Platform, LayoutAnimation, Animated, Image
} from 'react-native';
import Icon from '../components/Icon.react';
import { random } from 'lodash';

export default class AnimationsScreen extends Component {

    constructor(props) {
      super(props);
      //this.state = { marginTop: 0, marginTop1: 0, marginTop2: 0, marginTop3: 0, marginTop4: 0, marginTop5: 0, marginTop6: 0, marginTop7: 0, marginTop8: 0, marginTop9: 0 };
      this.state = { marginTop: 0, show: false, bounceValue: new Animated.Value(0) };
      if (Platform.OS === 'android') {
         UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }

    _addMargin = () => {

      this.state.bounceValue.setValue(1.5);
      Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.8,                         // Animate to smaller size
        friction: 2,                          // Bouncier spring
      }
    ).start();                                // Start the animation
      LayoutAnimation.spring();
      this.setState( { show: !this.state.show, marginTop: random(0, 100), marginTop1: random(0, 100), marginTop2: random(0, 100), marginTop3: random(0, 100), marginTop4: random(0, 100), marginTop5: random(0, 100), marginTop6: random(0, 100), marginTop7: random(0, 100), marginTop8: random(0, 100), marginTop9: random(0, 100) });
    }

    render() {
      return (
        <ScrollView >
        <TouchableOpacity onPress={ this._addMargin }>
          <Icon source={require('../assets/icons/settings.png')} />
        </TouchableOpacity>
          <View style={{ flexDirection: 'row'}}>
            <View style={{width: 10, height: 200, top: this.state.marginTop, backgroundColor: 'mistyrose'}} />
            <View style={{width: 10, height: 200, top: this.state.marginTop1, backgroundColor: 'green'}} />
            <View style={{width: 10, height: 200, top: this.state.marginTop2, backgroundColor: 'red'}} />
            <View style={{width: 10, height: 200, top: this.state.marginTop3, backgroundColor: 'black'}} />
            <View style={{width: 10, height: 200, top: this.state.marginTop4, backgroundColor: 'teal'}} />
            <View style={{width: 10, height: 200, top: this.state.marginTop5, backgroundColor: 'mistyrose'}} />
            <View style={{width: 10, height: 200, top: this.state.marginTop6, backgroundColor: 'green'}} />
            <View style={{width: 10, height: 200, top: this.state.marginTop7, backgroundColor: 'red'}} />
            <View style={{width: 10, height: 200, top: this.state.marginTop8, backgroundColor: 'black'}} />
            <View style={{width: 10, height: 200, top: this.state.marginTop9, backgroundColor: 'teal'}} />
            {this.state.show ? <Animated.Image style={{ width: 50, height: 50, transform: [ {scale: this.state.bounceValue} ] }}  source={require('../assets/icons/settings.png')}/> : null}
          </View>
        </ScrollView>
      );
    }
}
