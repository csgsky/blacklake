import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { Observable } from 'rxjs/Rx'
import SplashImage from '../../img/launch_screen.png'

import theme from '../../config/theme'

export default class Splash extends Component {

  constructor() {
    super()
    this.state = {
      timer: null
    }
  }

  componentDidMount() {
    const timer = Observable.timer(0, 1000).subscribe(
      (it) => {
        if (it === 3) {
          this.routerToLogin()
        }
      }
    )
    this.state.timer = timer
  }

  componentWillUnmount() {
    if (this.state.timer != null) {
      this.state.timer.unsubscribe()
    }
  }

  routerToLogin() {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={{
        width: theme.screenWidth,
        height: theme.screenHeight
      }}>
        {/* <TouchableOpacity activeOpaity={0.7}
          style={{ width: 200, height: 200, backgroundColor: 'red'}}
          onPress={() => {
            this.props.navigation.navigate('Login')
          }
          } /> */}
        <Image style={{width: theme.screenWidth, height: theme.screenHeight}} source={SplashImage} />
      </View>
    );
  }
}
