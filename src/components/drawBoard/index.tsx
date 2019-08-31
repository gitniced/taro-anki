import { View, Canvas } from '@tarojs/components';
import { createCanvasContext } from '@tarojs/taro';
import classnames from 'classnames';

type Props = {
  visible: boolean;
};

function DrawBoard({ visible }: Props) {
  const cls: string = classnames('draw-container', {
    visible
  });
  const context = createCanvasContext('board', this);
  let using = false;
  let eraserEnabled = false;
  let lastPoint = { x: 0, y: 0 };

  function drawLine(x1, y1, x2, y2) {
    context.beginPath();//开始移动笔触，路径开始
    context.moveTo(x1, y1);//其实坐标
    context.lineWidth = 4 ;//默认线条粗细
    context.lineTo(x2, y2);//结束坐标
    context.stroke();
    context.closePath();//结束笔触，路径结束
}
  function onStart(e) {
    console.log('start',e.touches);
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    using = true;
    if (eraserEnabled) {
      context.clearRect(x, y, 20, 20);
    } else {
      lastPoint = { x: x, y: y };
    }
  }

  function onMove(e) {
    console.log('move',e.touches);
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    if (!using) {
      return;
    }
    if (eraserEnabled) {
      context.clearRect(x, y, 20, 20);
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
