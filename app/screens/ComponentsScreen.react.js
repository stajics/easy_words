import React, { Component } from 'react';
import {
  ScrollView, Text, View
} from 'react-native';
import Icon from '../components/Icon.react';
import InputField from '../components/InputField.react';
import selectableList from '../wrappers/selectableList.react';
import CustomRow from '../components/CustomRow.react';


const List = selectableList(CustomRow,
  ()=><Icon width={ 40 } height={ 40 } source={require('../assets/icons/settings.png')} />,
  { width: 40, height: 40},
  'white',
  false);

export default class ComponentsScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { selected: [1,2], rowData: [{id: 1, data:'row 12'}, {id: 2, data: 'row 2'}, {id: 3, data: 'row 5'}]}
    }

    onPressRow = (rowData) => {
      // if(this.state.selected.includes(rowData.id)) {
      //   this.setState({selected: this.state.selected.filter(el => el!==rowData.id)});
      // } else {
      //   this.setState({selected: this.state.selected.concat(rowData.id)});
      // }
      if(this.state.selected.includes(rowData.id)) {
        this.setState({selected: []});
      } else {
        this.setState({selected: [rowData.id]});
      }
      // this.setState({selected: [rowData.id]});
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: 'mistyrose' }}>
            <Icon source={require('../assets/icons/settings.png')} />
            <InputField/>
            <List content={ this.state.rowData } isSelected={ (rowData)=> this.state.selected.includes(rowData.id) } onRowPress={ this.onPressRow }/>
        </View>
      );
    }
}
