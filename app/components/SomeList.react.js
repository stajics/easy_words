import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';

export default class SomeList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={[ { flex: 1 } ]}
          dataSource={ this.state.ds.cloneWithRows([{id: 1, data:'row 1'}, {id: 2, data: 'row 2'}])}
          renderRow={rowData => {
            {
              // eturn <SelectableEngagement
              //         key={rowData.title}
              //         info={rowData}
              //         name={rowData.title}
              //         selected={this.checkSelected(rowData.id)}
              //         parent={parent}/> }}
                    }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
