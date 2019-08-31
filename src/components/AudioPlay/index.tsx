import Taro, { Component } from '@tarojs/taro';
import { IconFont } from '@/components/index';
import { dictvoice } from '@/api/index.ts';

type Props = {
  content: string;
  type: number;
  auto: boolean;
  onPlay?: () => void;
  onStop?: () => void;
  onEnded?: () => void;
};

export default class Voice extends Component<Props> {
  static defaultProps = {
    type: 1,
    auto: false
  };
  audio;
  componentDidMount() {
    this.init(this.props);
  }
  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.content !== this.props.content) {
      this.init(nextProps);
    }
  }
  init = (props: Props) => {
    const { auto, type, content, onPlay, onStop, onEnded } = props;
    const Audio = Taro.createInnerAudioContext();
    Audio.src = dictvoice.getDictVoiceUrl(type, content);
    Audio.autoplay = auto || false;
    onPlay && Audio.onPlay(onPlay);
    onStop && Audio.onStop(onStop);
    onEnded && Audio.onEnded(onEnded);
    this.audio = Audio;
  };
  play = () => {
    this.audio.play();
  };
  stop = () => {
    this.audio.stop();
  };
  render() {
    return <IconFont className="icon-huabi" onClick={this.play} />;
  }
}
