import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

const WxParse = require('./wxParse/wxParse');

type State = {
  desc: string
}
type Props = {
  desc: string
}

export default class DescRichText extends Component<Props, State> {
  static defaultProps = {
    isEnable: true
  };
  constructor(props) {
    super(props);
    this.state = {
      desc: '<div>2222</div>'
    };
  }

  componentWillReceiveProps(nextProps) {
    const self = this;

    self.setState({
      desc: nextProps.desc
    });
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
    const that = this.$scope;
    if (this.state.desc) {
      console.log('有内容');
      const article = this.state.desc;
      WxParse.wxParse('article', 'html', article, that, 0);
    } else {
      console.log('没有获取到资源');
    }
  }
  componentWillMount() {
    console.log('componentWillMount::', this.state.desc);
  }

  componentDidMount() {
    console.log('componentDidMount::', this.state.desc);
  }

  componentWillUnmout() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <import src="./wxParse/wxParse.wxml" />
        <template is="wxParse" data="{{wxParseData:article.nodes}}" />
      </View>
    );
  }
}
