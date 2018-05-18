import {Alert} from 'react-native'
import * as actionConst from './const'


export function netWorkeFailed({error}) {
  Alert.alert('数据异常', error.message)
  return {
    type: actionConst.ACTION_NETWORK_FAILED,
    payload: error
  }
}


