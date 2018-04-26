import React, {Component} from 'react';
import {View} from 'react-native';
import { FloatingAction } from 'react-native-floating-action'
import {Observable} from 'rxjs/Rx'
import produceTaskApi from '../../api/produceTaskApi'
import theme from '../../config/theme'
import {KEY_USER_TOKEN, get} from '../../core/Storage'
import TaskIcon from '../../img/task_tab.png'
import TaskIconSelected from '../../img/task_tab_selected.png'
import MaterialIcon from '../../img/material_tab.png'
import MaterialIconSelectd from '../../img/material_tab_selected.png'

const actions = [{
  text: '未开始',
  icon: TaskIcon,
  color: theme.themeColor,
  name: 'bt_created',
  position: 1
}, {
  text: '执行中',
  icon: TaskIconSelected,
  color: theme.themeColor,
  name: 'bt_running',
  position: 2
}, {
  text: '暂停中',
  icon: MaterialIcon,
  color: theme.themeColor,
  name: 'bt_paused',
  position: 3
}, {
  text: '已结束',
  icon: MaterialIconSelectd,
  color: theme.themeColor,
  name: 'bt_done',
  position: 4
}, {
  text: '已取消',
  icon: MaterialIconSelectd,
  color: theme.themeColor,
  name: 'bt_cancel',
  position: 5
}];

export default class HomeFragment extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '项目管理',
    headerTitleStyle: {flex: 1, textAlign: 'center', color: 'black', fontWeight: 'normal', fontSize: 18}
  })

  componentDidMount() {
    get({
      key: KEY_USER_TOKEN
    }).then((token) => {
      Observable
        .fromPromise(produceTaskApi.listTaskByOperator({token}))
        .subscribe(it =>
          console.log({result: it})
        )
    })
  }

  render() {
    return (<View style={{flex: 1}}>
      <FloatingAction
        actions={actions}
        color={theme.themeColor}
        overlayColor={'rgba(68, 68, 68, 0.2)'}
        onPressItem={
          (name) => {
            console.log(`selected button: ${name}`);
          }
        }
      />
    </View>)
  }
}
