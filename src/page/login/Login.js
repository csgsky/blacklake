import React, {Component} from 'react';
import {View, TouchableOpacity, Text, NativeModules} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../action/loginAction'
import {KEY_USER_TOKEN, get} from '../../core/Storage'

class Login extends Component {

  componentDidMount() {
    get({
      key: KEY_USER_TOKEN
    }).then((res) => {
      console.log('token: ' + res)
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style={{width: 200, height: 200, backgroundColor: 'yellow'}}
          activeOpacity={0.4}
          onPress={() => this.props.actions.login({username: 'chenshaogang', password: '123231'})}>
          <Text>{this.props.username}</Text>
          <Text>{this.props.password}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100, height: 30, backgroundColor: 'blue'}}
          onPress={() => {
            NativeModules.RouterExt.router({
              toPage: 'ScanA',
              name: 'allen'
            })
          }}>
          <Text>扫码</Text>
        </TouchableOpacity>
        <Text>二维码是：</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {login} = state
  return {
    username: login.username,
    password: login.password
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

