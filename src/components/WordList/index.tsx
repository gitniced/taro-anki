import { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import  AudioPlay  from '../AudioPlay';
import  {IconFont}  from '..';
import './index.scss';

export type Column = {
  dataIndex: string;
  renderContent?: (text, record, idx) => Element;
  type?: string;
};

type Props = {
  dataSource: Array<any>;
  column: Array<Column>;
  renderFooter?: () => Element;
};

export default class WordList extends Component<Props> {
  static defaultProps = {
    dataSource: [],
    type: 'text'
  }
  constructor(props: Props) {
    super(props);
  }
  audioRefs=[]
  componentWillReceiveProps(){
    
  }
  onEnded = () => console.log(this.audioRefs)
  refCat = (node) => this.audioRefs.push(node) 
  renderRower = (data: any, column: Array<Column>, idx: number) => {
    return column.map((item, index) => {
      const { type, dataIndex } = item;
      const text = data[dataIndex];
      let result;
      switch (type) {
        case 'voice': {
          result = <AudioPlay onEnded={this.onEnded} content={text} />;
          break;
        }
        default:{
          result = <Text>{text}</Text>;
          break;
        }
      }
      return <View key={`${dataIndex}${type?'_'+index:''}`} className="inline-block">{result}</View>;
    });
  }
  render() {
    const { dataSource, column, renderFooter } = this.props;
    return (
      <View className="word-list">
        {dataSource.map((item, idx) => {
          return <View key={item['dataIndex']+idx} ref={this.refCat}>{this.renderRower(item, column, idx)}</View>
        })}
        <View>
          <IconFont/>
        </View>
      </View>
    );
  }
}
