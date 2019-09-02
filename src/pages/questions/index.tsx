import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { ParserRichText, IconFont, RestTime, AudioPlay, TomatoSchedule } from '@/components/index';
import './index.scss';
import WordList, { Column } from '@/components/WordList';
import DrawBoard from '@/components/DrawBoard';

class Questions extends Component {
  static options = {
    addGlobalClass: true
  };
  restTimeDom;
  config: Config = {
    navigationBarTitleText: ''
  };
  state={
    visible: false,
    clear: false,
    status: 0
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps, this.$router.params.id);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  btnClick = type => {
    const { clear } = this.state;
    if(type === 'huabi'){
      if(clear){
        this.setState({ visible: true, clear: false })
        return 
      }
      this.setState({ visible: !this.state.visible })
    }else if(type === 'houtui'){
      this.setState({ clear: true })
    }
  };

  render() {
    const { visible, clear, status } = this.state;
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
          {/* {['name','text', 'test'].map((item, index) => {
            return <AudioPlay key={item} auto content={item}/>
          })
          } */}
          <TomatoSchedule status={status} interval={1*60} restCallback={() => {console.log('shi ga n do')}}/>
          <View onClick={() => {this.setState({status: status ? 0 : 1})}}>{status? '暂停': '开始'}</View>
          <WordList
            dataSource={dataSource}
            column={col}
          />
          <DrawBoard visible={visible} clear={clear}/>
        </View>
        <View className="show-ans">
          <Button onClick={this.btnClick.bind(null, 'huabi')}>显示答案</Button>
        </View>
      </View>
    );
  }
}

export default Questions as ComponentClass;
