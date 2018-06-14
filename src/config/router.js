import React, {Component} from 'react'
import {StatusBar} from 'react-native'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'
import TabBarItem from '../widget/TabBarItem'
import ProjectIcon from '../img/project_tab.png'
import ProjectIconSelected from '../img/project_tab_selected.png'
import TaskIcon from '../img/task_tab.png'
import TaskIconSelected from '../img/task_tab_selected.png'
import MaterialIcon from '../img/material_tab.png'
import MaterialIconSelectd from '../img/material_tab_selected.png'
import MeIcon from '../img/me_tab.png'
import MeIconSelected from '../img/me_tab_selected.png'

import Splash from '../page/splash/Splash'
import Login from '../page/login/Login'
import HomeFragment from '../page/main/HomeFragment'
import MaterialFragment from '../page/main/MaterialFragment'
import TaskFragment from '../page/main/TaskFragment'
import MeFragment from '../page/main/MeFragment'

class Navigation extends Component {
  constructor () {
    super()
    StatusBar.setBarStyle('default')
  }

  render () {
    return <Navigator />
  }
}


const MainTab = TabNavigator({
  Home: {
    screen: HomeFragment,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '项目',
      tabBarIcon: ({ focused }) => (
        <TabBarItem
          focused={focused}
          normalImage={ProjectIcon}
          selectedImage={ProjectIconSelected}
      />
      )
    })
  },
  Task: {
    screen: TaskFragment,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '任务',
      tabBarIcon: ({ focused }) => (
        <TabBarItem
          focused={focused}
          normalImage={TaskIcon}
          selectedImage={TaskIconSelected}
        />
      )
    })
  },
  Material: {
    screen: MaterialFragment,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '物料',
      tabBarIcon: ({ focused }) => (
        <TabBarItem
          focused={focused}
          normalImage={MaterialIcon}
          selectedImage={MaterialIconSelectd}
        />
      )
    })
  },
  Me: {
    screen: MeFragment,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({ focused }) => (
        <TabBarItem
          focused={focused}
          normalImage={MeIcon}
          selectedImage={MeIconSelected}
        />
      )
    })
  }
},
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    initialRouteName: 'Task',
    tabBarOptions: {
      activeTintColor: '#0DC7A3',
      inactiveTintColor: '#9b9b9b',
      style: { backgroundColor: '#ffffff' },
    }
  }
)


const Navigator = StackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    MainTab: {screen: MainTab},
  },
  { initialRouteName: 'Splash',
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true
    },
    mode: 'card'
  }
)

export default Navigation
