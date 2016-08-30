import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity
} from 'react-native';

//SelectionIndicatorDimensions is object { width, height }
//RowComponent has rowData prop that stores rowData from ListViews renderRow
//deselectable - if false row onPress function will be disabled when row selected
export default selectableList = (RowComponent, SelectionIndicator, selectionIndicatorDimensions, rowBackgroundColor, deselectable = true) => {

  const styles = StyleSheet.create({
    selectionIndicatorDimensions: {
      width: selectionIndicatorDimensions.width,
      height: selectionIndicatorDimensions.height
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: rowBackgroundColor
    },
    selectionIndicatorContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: rowBackgroundColor
    }
  });

  return class SelectableList extends Component {
    propTypes: {
      content: React.PropTypes.array,
      isSelected: React.PropTypes.func,
      onRowPress: React.PropTypes.func
    }

    constructor(props) {
      super(props);
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = { ds };
    }

    _isSelected = (rowData) => {
      return this.props.isSelected(rowData);
    }

    _onPress(rowData) {
      this.props.onRowPress(rowData);
    }

    _renderRow = (rowData) => {
      let isSelected = this._isSelected(rowData);
        return(
          <TouchableOpacity disabled={ deselectable && isSelected } onPress={ this._onPress.bind(this, rowData) }>
            <View style={[ styles.rowContainer ]}>
              <RowComponent rowData={ rowData }/>
              <View style={[styles.selectionIndicatorContainer]}>
                { isSelected ? <SelectionIndicator /> : <View style={[ styles.selectionIndicatorDimensions ]}/> }
              </View>
            </View>
          </TouchableOpacity>
        );
    }

    render() {
      return (
        <View>
        <ListView
          dataSource={ this.state.ds.cloneWithRows( this.props.content ) }
          renderRow={ this._renderRow }
          />
        </View>
      );
    }
  }
}
