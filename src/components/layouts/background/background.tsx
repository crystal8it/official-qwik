import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import styles from './background.module.css';
import { getColorTransition } from '~/utils/color';
import {
  drawRect,
  drawLineCirclePoints,
  drawLineCircle,
  drawCircle,
} from '~/utils/cavnas';
import Image from '~/components/Image/Image';
import Rocket from '~/assets/rocket.png';

import arcWebp from '~/assets/background/arc/arc.webp';
import arcPng from '~/assets/background/arc/arc.png';
import planetsWebp from '~/assets/background/planets/planets.webp';
import planetsPng from '~/assets/background/planets/planets.png';
import leftCystalWebp from '~/assets/background/left-crystal/left-crystal.webp';
import leftCystalPng from '~/assets/background/left-crystal/left-crystal.png';
import rightCystalWebp from '~/assets/background/right-crystal/right-crystal.webp';
import rightCystalPng from '~/assets/background/right-crystal/right-crystal.png';
import arcDessertReverseWebp from '~/assets/background/arcDesertReverse/arcDesertReverse.webp';
import arcDessertReversePng from '~/assets/background/arcDesertReverse/arcDesertReverse.png';

type BackgroundProps = {
  transform: number;
  showButtomDesert: boolean;
};

const Background = component$(
  ({ transform, showButtomDesert }: BackgroundProps) => {
    const canvasRef = useSignal<HTMLCanvasElement>();
    const rocketRef = useSignal<HTMLImageElement>();
    const windowWidth = useSignal<number>(0);
    const windowHeight = useSignal<number>(0);
    const opacity = useSignal<number>(0);
    const isShow = useSignal<boolean>(false);

    useVisibleTask$(({ track }) => {
      track(() => [canvasRef.value, windowWidth.value, windowHeight.value]);
      const canvas = canvasRef.value;
      windowWidth.value = window.innerWidth;
      windowHeight.value = window.innerHeight;

      if (!canvas) return;

      canvas.width = windowWidth.value;
      canvas.height = windowHeight.value;

      const ctx = canvas.getContext('2d');

      if (!ctx) {
        return;
      }

      // stars
      const stars: [number, number, number, number, number, number][] =
        Array.from(Array(100), (_, index: number) => [
          Math.random() * windowWidth.value,
          Math.random() * windowHeight.value,
          index % 2 === 0 ? Math.random() * 1 + 1 : Math.random() * 3 + 1,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          Math.random() * 0.5 + 0.5,
        ]);

      const getNextColorLeft = getColorTransition('#5250E6', '#3CE6E6', 10000);
      const getNextColorRight = getColorTransition('#3CE6E6', '#5250E6', 10000);

      // aniamtion time
      const duration = 1500;
      let startTime: null | DOMHighResTimeStamp;

      // line animation
      const startX = windowWidth.value - Math.trunc(windowWidth.value / 3);
      const startY = 0;
      const endX = 0 + Math.trunc(windowWidth.value / 3);
      const endY = windowHeight.value;

      const distanceX = (endX - startX) / duration;
      const distanceY = (endY - startY) / duration;

      // lineCirclePoints
      const numPoints = 150;
      const points = drawLineCirclePoints(
        numPoints,
        windowWidth.value / 2,
        windowHeight.value / 2,
        windowWidth.value / 2
      );

      const draw = (timestamp?: DOMHighResTimeStamp) => {
        if (!timestamp) timestamp = window.performance.now();

        if (!startTime) {
          startTime = timestamp;
        }

        if (!rocketRef.value) return;

        ctx.clearRect(0, 0, windowWidth.value, windowHeight.value);

        const elapsedTime = timestamp - startTime;

        const lineCurrentX = startX + distanceX * elapsedTime;
        const lineCurrentY = startY + distanceY * elapsedTime;

        const numCompletedPoints = Math.ceil(
          (elapsedTime / duration) * numPoints
        );

        if (lineCurrentX > endX || lineCurrentY < endY) {
          isShow.value = false;
          opacity.value = 0;

          ctx.setLineDash([1, 10]);
          ctx.lineDashOffset = 0;
          drawLineCircle(ctx, points, numCompletedPoints);

          ctx.setLineDash([]);
        } else {
          if (opacity.value < 1) opacity.value += 0.01;
          drawRect(
            ctx,
            0,
            0,
            windowWidth.value,
            windowHeight.value,
            getNextColorLeft().rgb,
            getNextColorRight().rgb,
            opacity.value
          );

          drawCircle(
            ctx,
            0,
            0,
            windowWidth.value * 0.5,
            windowHeight.value * 1.7,
            windowWidth.value / 2,
            opacity.value
          );

          isShow.value = true;
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

        // ctx.fillStyle = `rgba(30,30,30,${0.1 * opacity.value})`;
        // ctx.fillRect(0, 0, windowWidth.value, windowHeight.value);

        requestAnimationFrame(draw);
      };
      draw();
    });

    return (
      <>
        {/* planet */}
        <figure
          style={{
            display: !showButtomDesert ? 'block' : 'none',
            position: 'fixed',
            backgroundAttachment: 'fixed',
            top: '0',
            left: '0',
            zIndex: '0',
            width: '100%',
            height: '100vh',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
            transform: `translateY(${-transform * 0.1}%)`,
          }}
          class="trans-10-opacity"
        >
          <Image
            sources={[{ srcSet: planetsWebp, type: 'image/webp' }]}
            src={planetsPng}
            fitPosition="bottom"
            alt="hero"
          ></Image>
        </figure>
        {/* right-crystal */}
        <figure
          style={{
            display: !showButtomDesert ? 'block' : 'none',
            position: 'fixed',
            backgroundAttachment: 'fixed',
            top: '0',
            left: '0',
            zIndex: '0',
            width: '100%',
            height: '100vh',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
            transform: `translate(${transform * 0.2}%, ${-transform * 0.1}%)`,
          }}
          class="trans-10-opacity"
        >
          <Image
            sources={[{ srcSet: rightCystalWebp, type: 'image/webp' }]}
            src={rightCystalPng}
            fitPosition="bottom"
            alt="hero"
          ></Image>
        </figure>

        {/* left-crystal */}
        <figure
          style={{
            display: !showButtomDesert ? 'block' : 'none',
            position: 'fixed',
            backgroundAttachment: 'fixed',
            top: '0',
            left: '0',
            zIndex: '0',
            width: '100%',
            height: '100vh',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
            transform: `translate(${-transform * 0.2}%, ${-transform * 0.1}%)`,
          }}
          class="trans-10-opacity"
        >
          <Image
            sources={[{ srcSet: leftCystalWebp, type: 'image/webp' }]}
            src={leftCystalPng}
            fitPosition="bottom"
            alt="hero"
          ></Image>
        </figure>
        {/* bottom */}
        <figure
          style={{
            display: !showButtomDesert ? 'block' : 'none',
            position: 'fixed',
            backgroundAttachment: 'fixed',
            top: '0',
            left: '0',
            zIndex: '0',
            width: '100%',
            height: '100vh',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
          }}
          class="trans-10-opacity"
        >
          <Image
            sources={[{ srcSet: arcWebp, type: 'image/webp' }]}
            src={arcPng}
            fitPosition="bottom"
            alt="hero"
          ></Image>
        </figure>

        {/* arcReverse */}
        <figure
          style={{
            display: showButtomDesert ? 'block' : 'none',
            position: 'fixed',
            backgroundAttachment: 'fixed',
            top: '0',
            left: '0',
            zIndex: '0',
            width: '100%',
            height: '100vh',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
          }}
          class="trans-10-opacity"
        >
          <Image
            sources={[{ srcSet: arcDessertReverseWebp, type: 'image/webp' }]}
            src={arcDessertReversePng}
            fitPosition="bottom"
            alt="hero"
          ></Image>
        </figure>
        <canvas
          style={{ position: 'fixed', top: '0', left: '0', zIndex: '-1' }}
          class={styles.entryAnimation}
          ref={canvasRef}
        >
          <img width="50px" height="50px" ref={rocketRef} src={Rocket} alt="" />
        </canvas>
      </>
    );
  }
);

export default Background;
