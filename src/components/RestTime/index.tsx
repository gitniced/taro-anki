import { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

type Props = {
  'external-class'?: string
}

export default function RestTime ({}: Props) {
  const [second, setSecond] = useState(0);
  function test(){
    console.log('test');
  }
  return <View className='external-class'>
    剩余时间{second}
  </View>
}

RestTime.externalClasses = ['external-class']