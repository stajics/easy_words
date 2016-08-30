/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//components
import {
  View, TouchableOpacity, Text, StatusBar
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTab from '../components/CustomTab.react';
//screens
import StudyScreen from './StudyScreen.react';
import AnimationsScreenScreen from './AnimationsScreen.react';
import ComponentsScreen from './ComponentsScreen.react';

//colors
const tabColors = ['#65F1ED', '#ff99cc', '#F1C765'];
const statusBarColors = ['#2eb8b8', '#F480B5', '#e6b800']

export default class HomeScreen extends Component {
    constructor(props) {
      super();
      this.state = { activeTab: 1}
    }

    onChangeTab = (tab) => {
      this.setState({ activeTab: tab.i });
    }

    render() {
    return (
      <View style={{flex: 1 }}>
          <StatusBar
            backgroundColor={ statusBarColors[this.state.activeTab] }
            barStyle="light-content"
          />
          <View style={{ backgroundColor: tabColors[this.state.activeTab], height: 60}}>
            <Text style={{fontSize: 20, color: 'white', top: 15, left: 30}}>Easy words</Text>
          </View>
          <ScrollableTabView
            initialPage={1}
            tabBarActiveTextColor={'white'}
            tabBarInactiveTextColor={'white'}
            tabBarTextStyle={{fontFamily: 'Roboto', fontSize: 15}}
            onChangeTab={ this.onChangeTab }
            tabBarUnderlineColor={'white'}
            renderTabBar={() => <CustomTab tabColors={tabColors}/>}
          >
            <StudyScreen tabLabel="study" />
            <AnimationsScreenScreen tabLabel="animations" />
            <ComponentsScreen tabLabel="components" />
          </ScrollableTabView>
      </View>
    );
  }
}
