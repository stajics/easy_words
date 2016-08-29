import React, { Component } from 'react';
import {
  ScrollView, Text, View
} from 'react-native';
import Icon from '../components/Icon.react';
import InputField from '../components/InputField.react';
import selectableList from '../wrappers/selectableList.react';


export default class ProfileScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { selected: [1,2], rowData: [{id: 1, data:'row 12'}, {id: 2, data: 'row 2'}, {id: 3, data: 'row 5'}]}
    }

    onPressRow = (rowData) => {
      if(this.state.selected.includes(rowData.id)) {
        this.setState({selected: this.state.selected.filter(el => el!==rowData.id)});
      } else {
        this.setState({selected: this.state.selected.concat(rowData.id)});
      }
    }

    render() {

      const List = selectableList('a', this.state.rowData, (rowData)=> this.state.selected.includes(rowData.id), this.onPressRow);

      return (
        <View style={{ flex: 1, backgroundColor: 'mistyrose' }}>
            <Icon source={require('../assets/icons/settings.png')} />
            <InputField/>
            <List/>
        </View>
      );
    }
}
