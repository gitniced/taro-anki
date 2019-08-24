import { View } from '@tarojs/components';
import Taro, { useEffect } from '@tarojs/taro';
import { IconFont } from '@/components/index';

type entryItem = {
  src: string,
  title?: string,
}

type Props = {
  src: string | Array<entryItem>;
  title?: string,
  auto?: boolean,
  count?: number,
  interval?: number,
  className?: string,
  model?: 'dictation' | 'follow'
};

export default function AudioPlay({src, title, auto = false, count, interval, model}: Props) {
  const Audio = Taro.createInnerAudioContext();
  useEffect(() => {
    initAudio()
  })
  function initAudio(){
    if(typeof src === 'string'){
      Audio.src = src;
      Audio.autoplay = auto;
    }
  }
  function play(){
    Audio.play();
  }
  function pause(){
    Audio.pause();
  }
  return <View className="external-class">
    { title && <View>{title}</View> }
    <IconFont className="icon-huabi" onClick={play}/>
    { !model && <IconFont className="icon-huabi" onClick={pause}/> }
  </View>
}

AudioPlay.externalClasses = ['external-class']