import React, { Component } from 'react';
import {
  View, TextInput, StyleSheet
} from 'react-native';
import Icon from './Icon.react';

export default class InputField extends Component {
    propTypes: {
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      containerStyle: View.PropTypes.style,
      textInputStyle: TextInput.PropTypes.style
    }

    constructor(props){
      super(props);
    }
    render() {
      const { containerStyle, textInputStyle, width, height } = this.props;
      const dimensions = (width && height) ? {width, height} : styles.defaultDimensions;
      return (
        <View style={[ styles.defaultBorder, styles.defaultMargines, containerStyle, styles.container ]} >
          <TextInput  { ...this.props } style={[ styles.defaultColor, dimensions, textInputStyle, styles.textInput ]}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  defaultDimensions: {
    width: 400,
    height: 35
  },
  defaultMargines: {
    marginLeft: 10,
    marginRight: 10,
  },
  defaultBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  container: {
    flexDirection: 'row'
  },
  defaultColor: {
    backgroundColor: 'white',
  },
  textInput: {
    flex: -1,
    textAlign: "left",
    textAlignVertical: "top"
  }
});
