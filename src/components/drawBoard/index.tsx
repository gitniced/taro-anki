import { View } from '@tarojs/components';
import classnames from 'classnames';

type Props = {
  visible: boolean;
};

function DraeBorad({ visible }: Props) {
  const cls: string = classnames('draw-container', {
    visible
  });
  return <View className={cls}>画板</View>;
}

export default DraeBorad;
