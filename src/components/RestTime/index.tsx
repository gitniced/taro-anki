import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

type Props = {
  'external-class'?: string
}

export default class RestTime extends Component<Props>{
  static externalClasses = ['external-class']
  constructor(props){
    super(props);
  }

  getRestTime = () => {
    console.log(111)
  }

  render(){
    return <View className='external-class'>
      剩余时间
    </View>
  }
}
