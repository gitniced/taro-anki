// import { useState } from '@tarojs/taro'
import { View, Radio } from '@tarojs/components';
import { secondCentMin } from '@/utils/index';
import './index.scss';

type Props = {
  qid: number;
  title: string;
  useTime: number;
  reviewStatus: string[];
  reviewKey?: string[];
  taskStatus?: boolean;
  onClick?: (number) => void
};
export default function TaskCard(props: Props) {
  const { title, useTime, reviewStatus, reviewKey, taskStatus = false, onClick = ()=>{}, qid } = props;
  console.log(qid);
  return (
    <View className="card-container" onClick={onClick.bind(null, qid)}>
      <Radio value="" checked={taskStatus} />
      <View className="card__content">
        <View className="card__title">{title}</View>
        <View className="card__review">{reviewStatus}</View>
        <View className="card__usetime">{secondCentMin(useTime)}</View>
      </View>
    </View>
  );
}
