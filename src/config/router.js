import React, {Component} from 'react'
import {StatusBar} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Splash from '../page/splash/Splash'
import Login from '../page/login/Login'

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
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: 'Splash',
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true
    },
    mode: 'card'
  }
)

export default Navigation
