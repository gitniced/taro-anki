
import './iconfont.scss';
import { View } from '@tarojs/components';

function Icon({className}){
  return  <View className={`inline-block iconfont ${className}`}/>
}
Icon.options = {
  addGlobalClass: true
}

export default Icon;