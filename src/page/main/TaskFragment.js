import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Easing, StyleSheet, Animated} from 'react-native';

export default class TaskFragment extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '任务执行',
    headerTitleStyle: {flex: 1, textAlign: 'center', color: 'black', fontWeight: 'normal', fontSize: 18}
  })
  constructor(props) {
    super(props)
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      translateValue: new Animated.ValueXY({x: 0, y: 0})
    }
  }
  startAnimate() {
    this.state.fadeInOpacity.setValue(1)
    this.state.translateValue.setValue({x: 0, y: 0})
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
    ]).start()
  }
  render() {
    return (<View>
      <View style={{
        width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
      }}>
        <Animated.Text style={[styles.text, {
          opacity: this.state.fadeInOpacity,
          transform: [{translateX: this.state.translateValue.x},
            {translateY: this.state.translateValue.y}
          ]
        }]}>+6</Animated.Text>
      </View>
      <TouchableOpacity style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}
        onPress={() => {
          this.startAnimate()
        }}>
        <Text>开始</Text>
      </TouchableOpacity>
    </View>)
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});
