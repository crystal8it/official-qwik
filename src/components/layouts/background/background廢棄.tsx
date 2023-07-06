import {
  $,
  component$,
  useSignal,
  useVisibleTask$,
  useOnWindow,
} from '@builder.io/qwik';
import styles from './background.module.css';
import { getColorTransition } from '~/utils';

const Background = component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();
  const windowWidth = useSignal<number>(0);
  const windowHeight = useSignal<number>(0);

  useOnWindow(
    'resize',
    $(() => {
      windowWidth.value = window.screen.width;
      windowHeight.value = window.screen.height;
    })
  );

  useVisibleTask$(({ track }) => {
    track(() => [canvasRef.value, windowWidth.value, windowHeight.value]);
    const canvas = canvasRef.value;
    windowWidth.value = window.screen.width;
    windowHeight.value = window.screen.height;

    if (!canvas) return;

    canvas.width = windowWidth.value;
    canvas.height = windowHeight.value;

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const stars: [number, number, number, number, number, number][] =
      Array.from(Array(100), (_, index: number) => [
        Math.random() * windowWidth.value,
        Math.random() * windowHeight.value,
        index % 2 === 0 ? Math.random() * 4 + 1 : Math.random() * 5 + 1,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        Math.random() * 0.5 + 0.5,
      ]);

    const getNextColorLeft = getColorTransition('#5250E6', '#3CE6E6', 20000);
    const getNextColorRight = getColorTransition('#3CE6E6', '#5250E6', 20000);

    // aniamtion time
    const duration = 1500;
    let startTime: null | DOMHighResTimeStamp;

    // line animation
    const startX = windowWidth.value - 450;
    const startY = 0;
    const endX = 0 + 450;
    const endY = windowHeight.value;

    const distanceX = (endX - startX) / duration;
    const distanceY = (endY - startY) / duration;

    // opacity
    let opacity = 0;

    // lineCirclePoints
    const numPoints = 100;
    const points = drawLineCirclePoints(
      numPoints,
      windowWidth.value / 2,
      windowHeight.value / 2
    );

    const draw = (timestamp?: DOMHighResTimeStamp) => {
      if (!timestamp) timestamp = window.performance.now();

      if (!startTime) {
        startTime = timestamp;
      }

      ctx.clearRect(0, 0, windowWidth.value, windowHeight.value);

      const elapsedTime = timestamp - startTime;

      const lineCurrentX = startX + distanceX * elapsedTime;
      const lineCurrentY = startY + distanceY * elapsedTime;

      const numCompletedPoints = Math.ceil(
        (elapsedTime / duration) * numPoints
      );

      if (lineCurrentX > endX || lineCurrentY < endY) {
        ctx.setLineDash([1, 10]);
        ctx.lineDashOffset = 0;

        drawLine(ctx, windowWidth.value - 450, 0, lineCurrentX, lineCurrentY);
        drawLineCircle(ctx, points, numCompletedPoints);

        ctx.setLineDash([]);
      } else {
        if (opacity < 1) opacity += 0.01;

        drawRect(
          ctx,
          0,
          0,
          windowWidth.value,
          windowHeight.value,
          getNextColorLeft().rgb,
          getNextColorRight().rgb,
          opacity
        );

        drawCircle(
          ctx,
          0,
          0,
          windowWidth.value,
          windowHeight.value,
          windowWidth.value / 2,
          '5,7,47',
          opacity
        );
      }

      stars.forEach(([x, y, r, vx, vy, opacity], i) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((Math.PI / 180) * 0);
        ctx.strokeStyle = '#fff';
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.moveTo(-r / 2, 0);
        ctx.lineTo(r / 2, 0);
        ctx.moveTo(0, -r / 2);
        ctx.lineTo(0, r / 2);
        ctx.lineWidth = r / 5;
        ctx.stroke();

        ctx.restore();

        x += vx;
        y += vy;

        if (x < 0 || x > windowWidth.value) {
          vx *= -1;
        }
        if (y < 0 || y > windowHeight.value) {
          vy *= -1;
        }

        if (Math.random() < 0.5) {
          opacity = Math.random() * 0.5 + 0.5;
        }

        stars[i] = [x, y, r, vx, vy, opacity];
      });

      ctx.fillStyle = `rgba(30,30,30,${0.1 * opacity})`;
      ctx.fillRect(0, 0, windowWidth.value, windowHeight.value);

      requestAnimationFrame(draw);
    };
    draw();
  });

  return (
    <canvas
      style={{ position: 'fixed', top: '0', left: '0', zIndex: '-1' }}
      class={styles.entryAnimation}
      ref={canvasRef}
    />
  );
});

const gradientRgbBasis = '21,45,92';

function drawLine(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number
): void {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineWidth = 5;
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = '#fff';
  ctx.stroke();
}

function drawRect(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  lrgb: string,
  rrgb: string,
  opacity: number = 1
): void {
  const linearGradient = ctx.createLinearGradient(startX, startY, endX, endY);
  linearGradient.addColorStop(0, `rgba(${lrgb},${opacity})`);
  linearGradient.addColorStop(0.5, `rgba(${gradientRgbBasis},${opacity})`);
  linearGradient.addColorStop(1, `rgb(${rrgb},${opacity})`);

  ctx.fillStyle = linearGradient;
  ctx.fillRect(0, 0, endX, endY);
}

function drawLineCirclePoints(
  numPoints: number = 200,
  centerX: number,
  centerY: number
) {
  const radius = 300;

  const startAngle = 0;
  const endAngle = Math.PI * 2;

  const angleIncrement = (endAngle - startAngle) / numPoints;
  const points = [];

  for (let i = 0; i <= numPoints; i++) {
    const angle = startAngle + i * angleIncrement;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x: x, y: y });
  }

  return points;
}

function drawLineCircle(
  ctx: CanvasRenderingContext2D,
  points: { x: number; y: number }[],
  numCompletedPoints: number
) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.lineWidth = 6;

  for (let i = 1; i <= numCompletedPoints; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.lineDashOffset = 0;

  ctx.strokeStyle = '#fff';
  ctx.stroke();
}

function drawCircle(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  circleRadius: number,
  gradientColor1: string,
  opacity: number = 1
): void {
  const centerX = (startX + endX) / 2;
  const centerY = (startY + endY) / 2;

  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    circleRadius
  );

  gradient.addColorStop(0, `rgba(${gradientColor1},${opacity})`);
  gradient.addColorStop(0.3, `rgba(${gradientRgbBasis},${opacity})`);
  gradient.addColorStop(
    0.4,
    `rgba(${gradientRgbBasis},${opacity >= 0.5 ? 0.5 : opacity})`
  );
  gradient.addColorStop(
    0.5,
    `rgba(${gradientRgbBasis},${opacity >= 0.3 ? 0.3 : opacity})`
  );
  gradient.addColorStop(
    0.6,
    `rgba(${gradientRgbBasis},${opacity >= 0.1 ? 0.1 : opacity})`
  );
  gradient.addColorStop(1, `transparent`);

  ctx.beginPath();
  ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;

  ctx.fill();
}

export default Background;
