import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { ParserRichText } from '@/components/index';
import './index.scss';

class Questions extends Component {
  config: Config = {
    navigationBarTitleText: ''
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps, this.$router.params.id);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="questions">
        <View className="card">
          <ParserRichText html='滑动窗口问题的思路以及相关题目有哪些？<hr id=answer><div style="text-align:left;"><div>滑动窗口算法广泛应用于网络协议等，其实滑动窗口算法是一种思路，可以解决很多问题，比较适合滑动窗口解决的问题通常是题目要求<b><font color="#1158ff">连续</font></b>的情况。<br></div><div><br></div><div>解题的套路通常是建立一个数组来表示滑动窗口，然后不断更新滑动窗口的范围（通常是往后移动），</div><div>解题的不同点其实就在于<font color="#1158ff">如何更新滑动窗口的范围</font>而已。</div><div><br></div><div><br></div><div>相关题目：</div><div><br></div></div>' />
        </View>
        <View />
      </View>
    );
  }
}

export default Questions as ComponentClass;
