import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { ParserRichText, IconFont, RestTime, AudioPlay } from '@/components/index';
import { dictvoice } from '@/api/index.ts';
import './index.scss';

class Questions extends Component {
  static options = {
    addGlobalClass: true
  };
  restTimeDom;
  config: Config = {
    navigationBarTitleText: ''
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps, this.$router.params.id);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  btnClick = type => {
    console.log(this.restTimeDom);
  };

  render() {
    console.log(dictvoice);
    return (
      <View className="questions">
        <View className="tool-bar">
          <View className="tool-bar__title">
            <View>标题</View>
            <RestTime
              external-class="task-rest-time"
              ref={node => {
                this.restTimeDom = node;
              }}
            />
          </View>
          <View className="tool-bar__btn-group">
            <IconFont className="icon-huabi" onClick={this.btnClick.bind(null, 'huabi')} />
            <IconFont className="icon-houtui" onClick={this.btnClick.bind(null, 'houtui')} />
            <IconFont className="icon-biaoji" onClick={this.btnClick.bind(null, 'biaoji')} />
            <IconFont className="icon-gengduo" onClick={this.btnClick.bind(null, 'gengduo')} />
          </View>
        </View>
        <View className="card">
          <AudioPlay auto src={dictvoice.getDictVoiceUrl(1, 'chinese')}/>
          {/* <ParserRichText html='滑动窗口问题的思路以及相关题目有哪些？<hr id=answer><div style="text-align:left;"><div>滑动窗口算法广泛应用于网络协议等，其实滑动窗口算法是一种思路，可以解决很多问题，比较适合滑动窗口解决的问题通常是题目要求<b><font color="#1158ff">连续</font></b>的情况。<br></div><div><br></div><div>解题的套路通常是建立一个数组来表示滑动窗口，然后不断更新滑动窗口的范围（通常是往后移动），</div><div>解题的不同点其实就在于<font color="#1158ff">如何更新滑动窗口的范围</font>而已。</div><div><br></div><div><br></div><div>相关题目：</div><div><br></div></div>' /> */}
        </View>
        <View className="show-ans">
          <Button onClick={this.btnClick.bind(null, 'huabi')}>显示答案</Button>
        </View>
      </View>
    );
  }
}

export default Questions as ComponentClass;
