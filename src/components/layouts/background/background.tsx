import {
  $,
  component$,
  useSignal,
  useVisibleTask$,
  useOnWindow,
} from '@builder.io/qwik';
import styles from './background.module.css';

const Background = component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();
  const windowWidth = useSignal<number>(0);
  const windowHeight = useSignal<number>(0);
  const scrollPercent = useSignal<number>(0);
  const nScrollPercent = useSignal<number>(1);

  useOnWindow(
    'scroll',
    $(() => {
      const scrollPos = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      scrollPercent.value = scrollPos / maxScroll;
      nScrollPercent.value = 1 - scrollPercent.value;
    })
  );

  useVisibleTask$(({ track }) => {
    track(() => canvasRef.value);
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
      Array.from(Array(850), () => [
        Math.random() * windowWidth.value,
        Math.random() * windowHeight.value,
        Math.random() * 4 + 1,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        Math.random() * 0.5 + 0.5,
      ]);

    const getNextColor = getColorTransition('#151934', '#440044', 20000);
    const getNextColorReverse = getColorTransition('#440044', '#151934', 20000);

    // line animation
    const startX = windowWidth.value - 450;
    const startY = 0;
    const endX = 0 + 450;
    const endY = windowHeight.value;

    const duration = 1000;
    const distanceX = (endX - startX) / duration;
    const distanceY = (endY - startY) / duration;

    // aniamtion time
    let startTime: null | DOMHighResTimeStamp;

    // opacity
    let opacity = 0;

    const draw = (timestamp?: DOMHighResTimeStamp) => {
      if (!timestamp) timestamp = window.performance.now();

      if (!startTime) {
        startTime = timestamp;
      }

      ctx.clearRect(0, 0, windowWidth.value, windowHeight.value);

      const elapsedTime = timestamp - startTime;

      const lineCurrentX = startX + distanceX * elapsedTime;
      const lineCurrentY = startY + distanceY * elapsedTime;

      if (lineCurrentX > endX || lineCurrentY < endY) {
        drawLine(ctx, windowWidth.value - 450, 0, lineCurrentX, lineCurrentY);
      } else {
        if (opacity < 1) opacity += 0.01;

        drawRect(
          ctx,
          0,
          0,
          windowWidth.value,
          windowHeight.value,
          getNextColor().rgb,
          opacity
        );

        drawCircle(
          ctx,
          0,
          0,
          windowWidth.value,
          windowHeight.value,
          windowWidth.value / 2,
          `${getNextColorReverse().rgb}`,
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

function getColorTransition(
  startColor: string,
  endColor: string,
  duration: number
) {
  const start = parseInt(startColor.substr(1), 16);
  const end = parseInt(endColor.substr(1), 16);
  const r0 = (start >> 16) & 255;
  const g0 = (start >> 8) & 255;
  const b0 = start & 255;
  const r1 = (end >> 16) & 255;
  const g1 = (end >> 8) & 255;
  const b1 = end & 255;

  const startTime = performance.now();

  return function () {
    const elapsed = performance.now() - startTime;
    const progress = (elapsed / duration) % 1;
    const reversedProgress =
      progress <= 0.5 ? progress * 2 : 1 - (progress - 0.5) * 2;
    const r = Math.round(r0 + (r1 - r0) * reversedProgress);
    const g = Math.round(g0 + (g1 - g0) * reversedProgress);
    const b = Math.round(b0 + (b1 - b0) * reversedProgress);
    const hex = `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;

    return { hex, rgb: `${r},${g},${b}` };
  };
}

function drawLine(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number
): void {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
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
  rgb: string,
  opacity: number = 1
): void {
  const linearGradient = ctx.createLinearGradient(startX, startY, endX, endY);
  linearGradient.addColorStop(0, `rgba(${rgb},${opacity})`);
  linearGradient.addColorStop(0.5, `rgba(255,255,255,${opacity})`);
  linearGradient.addColorStop(1, `rgb(${rgb},${opacity})`);

  ctx.fillStyle = linearGradient;
  ctx.fillRect(0, 0, endX, endY);
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
  gradient.addColorStop(0.3, `rgba(255,255,255,${opacity})`);
  gradient.addColorStop(
    0.4,
    `rgba(255,255,255,${opacity >= 0.5 ? 0.5 : opacity})`
  );
  gradient.addColorStop(
    0.5,
    `rgba(255,255,255,${opacity >= 0.3 ? 0.3 : opacity})`
  );
  gradient.addColorStop(
    0.6,
    `rgba(255,255,255,${opacity >= 0.1 ? 0.1 : opacity})`
  );
  gradient.addColorStop(1, `transparent`);

  ctx.beginPath();
  ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;

  ctx.fill();
}

export default Background;
