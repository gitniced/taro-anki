import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { ParserRichText, IconFont, RestTime, AudioPlay, DrawBoard } from '@/components/index';
import './index.scss';
import WordList, { Column } from '@/components/WordList';

class Questions extends Component {
  static options = {
    addGlobalClass: true
  };
  restTimeDom;
  config: Config = {
    navigationBarTitleText: ''
  };
  state={
    visible: false
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps, this.$router.params.id);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  btnClick = type => {
    if(type === 'huabi'){
      this.setState({ visible: true })
    }
  };

  render() {
    const { visible } = this.state;
    const dataSource = [{ content: 'chinese' }];
    const col = [
      {
        dataIndex: 'content'
      },
      {
        dataIndex: 'content',
        type: 'voice'
      }
    ];
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
          {['name','text', 'test'].map((item, index) => {
            return <AudioPlay key={item} auto content={item}/>
          })
          }
          <WordList
            dataSource={dataSource}
            column={col}
          />
          <DrawBoard visible={visible}/>
        </View>
        <View className="show-ans">
          <Button onClick={this.btnClick.bind(null, 'huabi')}>显示答案</Button>
        </View>
      </View>
    );
  }
}

export default Questions as ComponentClass;
