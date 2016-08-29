import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity
} from 'react-native';
import Icon from '../components/Icon.react';

export default selectableList = (rowComponent, content, isSelected, onRowPress) => {
  return class SelectableList extends Component {
    constructor(props) {
      super(props);
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = { ds };
    }

    isSelected(rowData) {
      return isSelected(rowData);
    }

    onPress(rowData) {
      onRowPress(rowData);
    }

    render() {
      return (
        <View>
        <ListView
          style={[ { flex: 1 } ]}
          dataSource={ this.state.ds.cloneWithRows( content ) }
          renderRow={rowData => {
            return(
              <TouchableOpacity onPress={ this.onPress.bind(this, rowData) }>
                <View style={{justifyContent: 'space-between', flex:1, backgroundColor: 'white', height: 50, flexDirection: 'row'}}>
                  <Text >{ rowData.data }</Text>
                  { this.isSelected(rowData) ? <Icon width={ 50 } height={ 50 } source={require('../assets/icons/settings.png')} /> : null }
                </View>
              </TouchableOpacity>
            );
          }}
          />
        </View>
      );
    }
  }
}
