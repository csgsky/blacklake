import React, {Component} from 'react'
import {StatusBar} from 'react-native'
import Splash from '../page/splash/Splash'
import {StackNavigator} from 'react-navigation'

class Navigation extends Component {
  constructor () {
    super()
    StatusBar.setBarStyle('default')
  }

  render () {
    return <Navigator />
  }
}


const Navigator = StackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    }
  }
)

export default Navigation
