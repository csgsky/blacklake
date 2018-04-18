import React, {Component} from 'react';
import {View, Image} from 'react-native';
import { Observable } from 'rxjs/Rx';
import { NavigationActions } from 'react-navigation';
import SplashImage from '../../img/launch_screen.png';

import theme from '../../config/theme'

const resetActionLogin = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({routeName: 'Login'})
  ]
})

export default class Splash extends Component {

  constructor() {
    super()
    this.state = {
      timer: null
    }
  }

  componentDidMount() {
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQWNjb3VudFR5cGUiLCJpZCI6MTYsInVpZCI6IjEzMDAwMDAwMDAwIiwiZW1haWwiOm51bGwsIm5hbWUiOiLmtYvor5XnrqHnkIblkZgiLCJzcGVsbCI6InRlc3QuYWRtaW4iLCJwaG9uZSI6IjEzMDAwMDAwMDAwIiwic3RhdHVzIjoiYWN0aXZlIiwibGV2ZWwiOjMsImxhc3RMb2dpbkF0IjoiMjAxOC0wNC0xN1QwOToyMjoxMS4wMzdaIiwicGFzc3dvcmQiOm51bGwsImF2YXRhclVybCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAxNy0wNy0wN1QwMzowNjo1Ny4wMDBaIiwidXBkYXRlZEF0IjoiMjAxOC0wNC0xN1QwOToyMjoxMS4wMDBaIiwib3JnX2lkIjoyLCJzc29Ub2tlbiI6IjQzYzI4OTcwLWY5MmEtNDI0Zi1iMDkzLTNmNDNiNjQwNjg0ZiIsImlhdCI6MTUyMzk1NjkzMSwiZXhwIjoxNTI0NTYxNzMxfQ.zYg8o3Ow9HQNLQBgxlbKGpB5Rp4U8tcmUjjVI2W8l3o
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
    this.props.navigation.dispatch(resetActionLogin)
  }

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
