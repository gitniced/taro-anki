import './iconfont.scss';
import { View } from '@tarojs/components';

type Props = {
  className?: string,
  style?: {},
  onClick?: () => void
}

function Icon({ className, style = {}, onClick = () => {} }: Props) {
  return (
    <View style={{ fontSize: '18px', ...style }} className={`inline-block iconfont ${className}`} onClick={onClick} />
  );
}
Icon.options = {
  addGlobalClass: true
};

export default Icon;
