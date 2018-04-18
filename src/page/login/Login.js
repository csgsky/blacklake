import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../action/loginAction'
import theme from '../../config/theme'

class Login extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style={{width: 200, height: 200, backgroundColor: 'yellow'}}
          activeOpacity={0.4}
          onPress={() => this.props.actions.login({username: 'chenshaogang', password: '123231'})}>
          <Text>{this.props.username}</Text>
          <Text>{this.props.password}</Text>
        </TouchableOpacity>
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
