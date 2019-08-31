import { useEffect, useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { google } from 'translation.js';
import { TranslateResult } from 'translation.js/declaration/api/types';
export default function({content}){
  const initData :TranslateResult = {
    text: '',
    raw: '',
    link: '',
    from: '',
    to: '',
    result: ['']
  };
  const [result, setResult] = useState(initData);
  useEffect(() => {
    google.translate(content).then(res => {
      console.log(res);
      setResult(res);
    });
  })
  return <View> {result.raw} </View>;
}