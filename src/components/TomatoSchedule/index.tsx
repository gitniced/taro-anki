import { View } from '@tarojs/components';
import { useState, useEffect, useRef } from '@tarojs/taro';
import moment from 'moment';
import './index.scss';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

interface Props {
  interval: number,
  restCallback?: () => void,
  status: number
}

function TomatoSchedule({interval = 900, restCallback, status = 0}: Props) {
  const [ delay, setdelay ] = useState<number | null>(null);
  const [ second, setsecond ] = useState(0);
  const [view, setview] =useState<string>('00:00');

  useEffect(() => {
    if(status === 0){
      setdelay(null);
    }else{
      setdelay(1000);
    }
  }, [status])

  useInterval(() => {
    if(moment.duration(second).asSeconds() % interval === 0){
      restCallback && restCallback
    }
    setsecond(second+1);
    const newView = moment(second*1000).format('mm:ss');
    const hour = Number(moment.duration(second*1000).asHours().toFixed());
    setview(`${hour?hour+':':''}${newView}`);
  }, delay);

  return <View className="schedule-wrapper">{view}</View>
}

export default TomatoSchedule;