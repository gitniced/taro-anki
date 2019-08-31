import { View, Canvas } from '@tarojs/components';
import { createCanvasContext } from '@tarojs/taro';
import classnames from 'classnames';
import './index.scss';

type Props = {
  visible: boolean;
  clear: boolean;
};

function DrawBoard({ visible, clear }: Props) {
  const cls: string = classnames('draw-container', {
    visible
  });
  const context = createCanvasContext('board', this);
  let using = false;
  let eraserEnabled = clear;
  let lastPoint = { x: 0, y: 0 };

  function drawLine(x1, y1, x2, y2) {
    context.beginPath();//开始移动笔触，路径开始
    context.setLineWidth(2)
    context.moveTo(x1, y1);//其实坐标
    context.lineTo(x2, y2);//结束坐标
    context.stroke();
    context.closePath();//结束笔触，路径结束
    context.draw(true);
}
  function onStart(e) {
    const x = e.touches[0].x;
    const y = e.touches[0].y;
    using = true;
    if (eraserEnabled) {
      context.clearRect(x-10, y-10, 20, 20);
      context.draw(true)
    } else {
      lastPoint = { x: x, y: y };
    }
  }

  function onMove(e) {
    const x = e.touches[0].x;
    const y = e.touches[0].y;
    if (!using) {
      return;
    }
    if (eraserEnabled) {
      context.clearRect(x-10, y-10, 20, 20);
      context.draw(true)
    } else {
      const newPoint = { x: x, y: y };
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
      lastPoint = newPoint;
    }
  }

  function onEnd() {
    using = false;
  }

  return (
    <View className={cls}>
      <Canvas
        canvasId="board"
        style={{ width: '100%', height: '100%' }}
        onTouchStart={onStart}
        onTouchMove={onMove}
        onTouchEnd={onEnd}
      ></Canvas>
    </View>
  );
}

export default DrawBoard;
