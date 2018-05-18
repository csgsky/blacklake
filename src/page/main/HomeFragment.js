import React, {Component} from 'react';
import {View, FlatList, RefreshControl, NativeModules} from 'react-native';
import { FloatingAction } from 'react-native-floating-action'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../action/projectAction'
import LetterAvatar from '../../widget/LetterAvatar'
import theme from '../../config/theme'
import TaskIcon from '../../img/task_tab.png'
import TaskIconSelected from '../../img/task_tab_selected.png'
import MaterialIcon from '../../img/material_tab.png'
import MaterialIconSelectd from '../../img/material_tab_selected.png'

const floatingActions = [{
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

class HomeFragment extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '项目管理',
    headerTitleStyle: {flex: 1, textAlign: 'center', color: 'black', fontWeight: 'normal', fontSize: 18}
  })

  componentDidMount() {
    const {page, isRefreshing} = this.props
    this.props.actions.getProjects({page, isRefreshing})
  }
  // <LetterAvatar name="C" size={80} radius={10} />
  render() {
    const {projects, isRefreshing} = this.props
    return (<View style={{flex: 1}}>
      <FlatList
        data={projects}
        renderItem={() => <View style={{height: 100}}/>}
        ItemSeparatorComponent={() => <View style={{height: 8, backgroundColor: 'red'}}/>}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              this.props.actions.getProjects({page: 1, isRefreshing: true})
            }}
            refreshing={isRefreshing}
          />
        }
      />
      <FloatingAction
        actions={floatingActions}
        color={theme.themeColor}
        overlayColor={'rgba(68, 68, 68, 0.2)'}
        onPressItem={
          (name) => {
            NativeModules.RouterExt.router({
              toPage: 'ScanA',
              name: 'allen'
            })
          }
        }
      />
    </View>)
  }
}

const mapStateToProps = (state) => {
  const {project} = state
  return {
    projects: project.projects,
    isRefreshing: project.isRefreshing,
    hasMore: project.hasMore,
    page: project.page
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeFragment)
