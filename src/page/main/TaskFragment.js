import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Easing, StyleSheet, Animated, Image} from 'react-native';
import Like from '../../img/like.png'
import Liked from '../../img/liked.png'


export default class TaskFragment extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '任务执行',
    headerTitleStyle: {flex: 1, textAlign: 'center', color: 'black', fontWeight: 'normal', fontSize: 18}
  })
  constructor(props) {
    super(props)
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      translateValue: new Animated.ValueXY({x: 0, y: -20}),
      bounceValue: new Animated.Value(0),
      likeByMe: false
    }
  }
  startAnimate() {
    this.state.fadeInOpacity.setValue(1)
    this.state.translateValue.setValue({x: 0, y: -20});
    this.state.bounceValue.setValue(1.5)
    Animated.parallel([
      Animated.spring(this.state.bounceValue, {
        toValue: 1,
        friction: 4,
        tension: 100
      }),
      Animated.parallel([
        Animated.timing(this.state.translateValue, {
          toValue: {x: 0, y: -40},
          duration: 1000}
        ),
        Animated.timing(this.state.fadeInOpacity, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear
        })
      ])
    ]).start()
  }
  render() {
    console.log({likeByMe: this.state.likeByMe})
    return (<View>
      <View style={{
        width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
      }}>
        <TouchableOpacity activeOpacity={0.9}
          style={{height: 80, width: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}
          onPress={() => {
            if (!this.state.likeByMe) {
              this.startAnimate()
            }
            this.setState({
              likeByMe: !this.state.likeByMe
            })
          }}>
          <Animated.Image
            source={this.state.likeByMe ? Liked : Like}
            style={{width: 20, height: 20, transform: [{scale: this.state.bounceValue}]}}/>
          <Animated.Text style={[styles.text, {
            opacity: this.state.fadeInOpacity,
            transform: [{translateX: this.state.translateValue.x},
              {translateY: this.state.translateValue.y}
            ]
          }]}>+6</Animated.Text>
        </TouchableOpacity>
      </View>
    </View>)
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#b99bff',
    position: 'absolute',
    fontSize: 16
  }
});
