import React, {Component} from 'react';
import {View, Image} from 'react-native';
import SplashImage from '../../img/launch_screen.png'
import theme from '../../config/theme'

export default class Splash extends Component {

  render() {
    return (
      <View style={{
        width: theme.screenWidth,
        height: theme.screenHeight
      }}>
        <Image style={{width: theme.screenWidth, height: theme.screenHeight}} source={SplashImage} />
      </View>
    );
  }
}
