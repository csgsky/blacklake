import React, {Component} from 'react';
import {View, Image} from 'react-native';
import { Observable } from 'rxjs/Rx';
import { NavigationActions } from 'react-navigation';
import SplashImage from '../../img/launch_screen.png';
import theme from '../../config/theme'
import {KEY_USER_TOKEN, save} from '../../core/Storage'

const resetActionLogin = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({routeName: 'MainTab'})
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
    save({
      key: KEY_USER_TOKEN,
      value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQWNjb3VudFR5cGUiLCJpZCI6MzA3MDcyLCJ1aWQiOiIxNTE1MTgxMjAzOCIsImVtYWlsIjpudWxsLCJuYW1lIjoieGlhbmcxIiwic3BlbGwiOiJ4aWFuZzEiLCJwaG9uZSI6IjE1MTUxODEyMDM4Iiwic3RhdHVzIjoiYWN0aXZlIiwibGV2ZWwiOjMsImxhc3RMb2dpbkF0IjoiMjAxOC0wNS0xN1QwOTozNDowNy4yMzdaIiwicGFzc3dvcmQiOm51bGwsImF2YXRhclVybCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAxOC0wNS0xNVQwOToxNzoxNC4wMDBaIiwidXBkYXRlZEF0IjoiMjAxOC0wNS0xN1QwOTozNDowNy4wMDBaIiwib3JnX2lkIjoyLCJzc29Ub2tlbiI6IjQ3YTEwMjlkLWU0OGItNDZmMS1iMzU1LTcyNjQ0MmY1MDEwOCIsImlhdCI6MTUyNjU0OTY0NywiZXhwIjoxNTI3MTU0NDQ3fQ.Z_naxH4dqueaJPCA09iyqA-gnLhuRvJ6T2cbFm7eHu8'
    }).then().catch((e) => {
      console.log(e)
    })

    const timer = Observable.timer(0, 1000).subscribe(
      (it) => {
        if (it === 1) {
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
