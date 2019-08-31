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
  model?: 'dictation',
  renderContent: (src, play, stop) => React.Component
  renderFooter: (play, stop) => React.Component
};

export default function AudioPlay({src, title, auto = false, count = 2, interval = 3, model, renderContent, renderFooter, ...restProps}: Props) {
  const Audio = Taro.createInnerAudioContext();
  let wordLoopCount: number = 0; // 单词循环次数
  let currentIdx: number = 0; // 当前单词下标
  let timer;
  // let listLoopCount = 0;
  useEffect(() => {
    initAudio()
  })
  function initAudio(){
    if(typeof src === 'string'){
      Audio.src = src;
      Audio.autoplay = auto;
    }else{
      Audio.src = src[0].src;
      Audio.autoplay = false;
      currentIdx = 1;
    }
  }
  function play(){
    if(typeof src === 'string'){
      Audio.play();
    }else if(Array.isArray(src) ){
      Audio.play();
      wordLoopCount++;
      palyList();
    }
  }
  function palyList() {
    timer = setTimeout(() => {
      if(currentIdx >= src.length && wordLoopCount >= count){
        clearTimeout(timer);
        initAudio();
        return false;
      }
      if(Array.isArray(src) && wordLoopCount >= count){
        wordLoopCount = 0;
        Audio.src = src[currentIdx].src;
        currentIdx++;
      }
      play();
    }, interval * 1000)
  }
  function stop(){
    if(typeof src === 'string'){
      Audio.stop();
    }else{
      clearTimeout(timer);
    }
  }
  return <View className="external-class">
    { title && <View>{title}</View> }
    <IconFont className="icon-huabi" onClick={play}/>
    { !model && <IconFont className="icon-huabi" onClick={stop}/> }
  </View>
}

AudioPlay.externalClasses = ['external-class']