import React, {Component} from 'react';
import {View, TouchableOpacity, Text, NativeModules} from 'react-native';

export default class MaterialFragment extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '物料管理',
    headerTitleStyle: {flex: 1, textAlign: 'center', color: 'black', fontWeight: 'normal', fontSize: 18}
  })
  render() {
    return <View style={{width: 100, height: 100, backgroundColor: 'yellow'}}/>
  }
}
