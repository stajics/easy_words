import React, { Component } from 'react';
import {
  View, Image, StyleSheet
} from 'react-native';

export default class Icon extends Component {
    propTypes: {
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      containerStyle: View.PropTypes.style,
      imageStyle: Image.PropTypes.style,
      source: Image.PropTypes.ImageSourcePropType.isRequired
    }

    constructor(props){
      super(props);
    }
    render() {
      const { containerStyle, imageStyle, width, height, source } = this.props;
      const dimensions = (width && height) ? {width, height} : styles.defaultDimensions;
      return (
        <View style={[ dimensions, containerStyle , styles.container ]} >
          <Image { ...this.props } style={[ dimensions, imageStyle, styles.image ]} source={ source }/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  defaultDimensions: {
    width: 50,
    height: 50
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'space-around',
    resizeMode: 'stretch'
  }
});
