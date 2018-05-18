import React, {Component} from 'react'
import {View, Text, TouchableOpacity, NativeModules} from 'react-native'
import theme from '../config/theme'

export default class LetterAvatar extends Component {
  render() {
    const {name, size, radius} = this.props
    const char = name.trim()[0].toUpperCase()
    let bgColor
    if (/[A-Z]/.test(char)) {
      const index = char.charCodeAt() - 65
      bgColor = theme.google[index]
    } else if (/[\d]/.test(char)) {
      const index = parseInt(char, 0)
      bgColor = theme.google[index]
    } else {
      bgColor = [0, 0, 0]
    }

    const style = {
      backgroundColor: `rgb(${bgColor})`,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radius
    }
    return (<TouchableOpacity style={style}>
      <Text style={{fontSize: 50, color: 'white'}}>{char}</Text>
    </TouchableOpacity>)
  }
}
