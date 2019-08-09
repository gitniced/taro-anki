import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { TaskCard } from '@/components/index';
import './index.scss';

class Index extends Component{
  config: Config = {
    navigationBarTitleText: '首页'
  }

  goToQuestion = (id: number) => {
    console.log(id);
    Taro.navigateTo({ url: `/pages/questions/index?id=${id}` })
  }

  render(){
    return <View className="home-containers">
      <View className="task-list">
        <TaskCard qid={1} onClick={this.goToQuestion} title="测试" reviewStatus={['10', '5', '0', '6']} useTime={500}/>
      </View>
      <View className="preview">所用时间0分钟</View>
    </View>
  }
}

export default Index as ComponentClass;