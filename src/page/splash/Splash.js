import React, {Component} from 'react';
import {View, Image} from 'react-native';
import { Observable } from 'rxjs/Rx';
import { NavigationActions } from 'react-navigation';
import SplashImage from '../../img/launch_screen.png';
import theme from '../../config/theme'
import {KEY_USER_TOKEN, save, get} from '../../core/Storage'

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
    save({
      key: KEY_USER_TOKEN,
      value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQWNjb3VudFR5cGUiLCJpZCI6MSwidWlkIjoiMTIzNDU2Nzg5MTAiLCJlbWFpbCI6bnVsbCwibmFtZSI6IumDkeWOgumVvyIsInNwZWxsIjoiemhlbmNoYW5nemhhbmciLCJwaG9uZSI6IjEyMzQ1Njc4OTEwIiwic3RhdHVzIjoiYWN0aXZlIiwibGV2ZWwiOjMsImxhc3RMb2dpbkF0IjoiMjAxOC0wNC0yNFQwOTo1MTozOS40MDhaIiwicGFzc3dvcmQiOm51bGwsImF2YXRhclVybCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAxNy0wNS0zMVQxNDoyNjoxNC4wMDBaIiwidXBkYXRlZEF0IjoiMjAxOC0wNC0yNFQwOTo1MTozOS4wMDBaIiwib3JnX2lkIjoxLCJzc29Ub2tlbiI6ImM0YzMwMjZmLTg3YzctNDAyNS1hOTUyLTRlODRiNTgzMDJmNCIsImlhdCI6MTUyNDU2MzQ5OSwiZXhwIjoxNTI1MTY4Mjk5fQ.0XL81CPUoa3oi6ov_YpUJrOOsDyuVS250QPNMvKDIms'
    }).then().catch((e) => {
      console.log(e)
    })

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
