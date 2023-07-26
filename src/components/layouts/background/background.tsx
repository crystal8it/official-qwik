import {
  component$,
  useSignal,
  useVisibleTask$,
  useOnWindow,
  $,
} from '@builder.io/qwik';
import styles from './background.module.css';
import { getColorTransition } from '~/utils/color';
import {
  drawRect,
  drawLineCirclePoints,
  drawLineCircle,
  drawCircle,
} from '~/utils/cavnas';
import Image from '~/components/Image/Image';

// background

// ar
import arcWebpXl from '~/assets/background/arc/1440/arc.webp';
import arcWebpLg from '~/assets/background/arc/1080/arc.webp';
import arcWebpPortraitMd from '~/assets/background/arc/768/arc-portrait.webp';
import arcWebpMd from '~/assets/background/arc/768/arc.webp';
import arcWebpSm from '~/assets/background/arc/450/arc.webp';
import arcPngXl from '~/assets/background/arc/1440/arc.png';

// plane
import planetsWebpXl from '~/assets/background/planets/1440/planets.webp';
import planetsWebpLg from '~/assets/background/planets/1080/planets.webp';
import planetsWebpPortraitMd from '~/assets/background/planets/768/planets-portrait.webp';
import planetsWebpMd from '~/assets/background/planets/768/planets.webp';
import planetsWebpSm from '~/assets/background/planets/450/planets.webp';
import planetsPngXl from '~/assets/background/planets/1440/planets.png';

// left crystal
import leftCystalWebpXl from '~/assets/background/left-crystal/1440/left-crystal.webp';
import leftCystalWebpLg from '~/assets/background/left-crystal/1080/left-crystal.webp';
import leftCystalWebpPortraitMd from '~/assets/background/left-crystal/768/left-crystal-portrait.webp';
import leftCystalWebpMd from '~/assets/background/left-crystal/768/left-crystal.webp';
import leftCrystalWebpSm from '~/assets/background/left-crystal/450/left-crystal.webp';
import leftCystalPngXl from '~/assets/background/left-crystal/1440/left-crystal.png';

// right crystal
import rightCystalWebpXl from '~/assets/background/right-crystal/1440/right-crystal.webp';
import rightCystalWebpLg from '~/assets/background/right-crystal/1080/right-crystal.webp';
import rightCystalWebpPortraitMd from '~/assets/background/right-crystal/768/right-crystal-portrait.webp';
import rightCystalWebpMd from '~/assets/background/right-crystal/768/right-crystal.webp';
import rightCrystalWebpSm from '~/assets/background/right-crystal/450/right-crystal.webp';
import rightCystalPngXl from '~/assets/background/right-crystal/1440/right-crystal.png';

// arc desert
import arcDessertReverseWebpXl from '~/assets/background/arcDesertReverse/1440/arcDesertReverse.webp';
import arcDessertReverseWebpLg from '~/assets/background/arcDesertReverse/1080/arcDesertReverse.webp';
import arcDessertReverseWebpPortraitMd from '~/assets/background/arcDesertReverse/768/arcDesertReverse-portrait.webp';
import arcDessertReverseWebpMd from '~/assets/background/arcDesertReverse/768/arcDesertReverse.webp';
import arcDessertReverseWebpSm from '~/assets/background/arcDesertReverse/450/arcDesertReverse.webp';
import arcDessertReversePngXl from '~/assets/background/arcDesertReverse/1440/arcDesertReverse.png';

type source = {
  srcSet: string;
  type: 'image/webp' | 'image/png' | 'image/jpeg';
  media?: string;
};

type BackgroundProps = {
  transform: number;
  showButtomDesert: boolean;
};

const sources: { [key: string]: source[] } = {
  arc: [
    {
      srcSet: arcWebpPortraitMd,
      media: '(min-width: 650px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: arcWebpSm,
      media: '(min-width: 300px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: arcWebpXl,
      media: '(min-width: 1440px)',
      type: 'image/webp',
    },
    {
      srcSet: arcWebpLg,
      media: '(min-width: 900px)',
      type: 'image/webp',
    },

    {
      srcSet: arcWebpMd,
      media: '(min-width: 650px)',
      type: 'image/webp',
    },
  ],
  planets: [
    {
      srcSet: planetsWebpPortraitMd,
      media: '(min-width: 650px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: planetsWebpSm,
      media: '(min-width: 300px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: planetsWebpXl,
      media: '(min-width: 1440px)',
      type: 'image/webp',
    },
    {
      srcSet: planetsWebpLg,
      media: '(min-width: 900px)',
      type: 'image/webp',
    },

    {
      srcSet: planetsWebpMd,
      media: '(min-width: 650px)',
      type: 'image/webp',
    },
  ],
  leftCrystal: [
    {
      srcSet: leftCystalWebpPortraitMd,
      media: '(min-width: 650px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: leftCrystalWebpSm,
      media: '(min-width: 300px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: leftCystalWebpXl,
      media: '(min-width: 1440px)',
      type: 'image/webp',
    },
    {
      srcSet: leftCystalWebpLg,
      media: '(min-width: 900px)',
      type: 'image/webp',
    },

    {
      srcSet: leftCystalWebpMd,
      media: '(min-width: 650px)',
      type: 'image/webp',
    },
  ],
  rightCrystal: [
    {
      srcSet: rightCystalWebpPortraitMd,
      media: '(min-width: 650px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: rightCrystalWebpSm,
      media: '(min-width: 300px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: rightCystalWebpXl,
      media: '(min-width: 1440px)',
      type: 'image/webp',
    },
    {
      srcSet: rightCystalWebpLg,
      media: '(min-width: 900px)',
      type: 'image/webp',
    },

    {
      srcSet: rightCystalWebpMd,
      media: '(min-width: 650px)',
      type: 'image/webp',
    },
  ],
  arcDesertReverse: [
    {
      srcSet: arcDessertReverseWebpPortraitMd,
      media: '(min-width: 650px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: arcDessertReverseWebpSm,
      media: '(min-width: 300px) and (orientation: portrait)',
      type: 'image/webp',
    },
    {
      srcSet: arcDessertReverseWebpXl,
      media: '(min-width: 1440px)',
      type: 'image/webp',
    },
    {
      srcSet: arcDessertReverseWebpLg,
      media: '(min-width: 900px)',
      type: 'image/webp',
    },

    {
      srcSet: arcDessertReverseWebpMd,
      media: '(min-width: 650px)',
      type: 'image/webp',
    },
  ],
};

const Background = component$(
  ({ transform, showButtomDesert }: BackgroundProps) => {
    const canvasRef = useSignal<HTMLCanvasElement>();
    const windowWidth = useSignal<number>(0);
    const windowHeight = useSignal<number>(0);
    const opacity = useSignal<number>(0);
    const isShow = useSignal<boolean>(false);
    const firstRender = useSignal<boolean>(true);

    useOnWindow(
      'resize',
      $(() => {
        windowWidth.value = window.screen.width;
        windowHeight.value = window.screen.height;
      })
    );

    useOnWindow(
      'orientationchange',
      $(() => {
        const mediaQuery = window.matchMedia('(orientation: portrait)');

        if (mediaQuery.matches) {
          windowWidth.value = window.screen.width;
          windowHeight.value = window.screen.height;
        } else {
          windowWidth.value = window.screen.width;
          windowHeight.value = window.screen.height;
        }
      })
    );

    useVisibleTask$(({ track }) => {
      track(() => [canvasRef.value, windowWidth.value, windowHeight.value]);
      const canvas = canvasRef.value;
      windowWidth.value = window.innerWidth;
      windowHeight.value = window.innerHeight;
      let starsNumber = 100;

      if (windowWidth.value >= 900) {
        starsNumber = 300;
      }

      if (!canvas) return;

      canvas.width = windowWidth.value;
      canvas.height = windowHeight.value;

      const ctx = canvas.getContext('2d');

      if (!ctx) {
        return;
      }

      // stars
      const stars: [number, number, number, number, number, number][] =
        Array.from(Array(starsNumber), (_, index: number) => [
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

        ctx.clearRect(0, 0, windowWidth.value, windowHeight.value);

        const elapsedTime = timestamp - startTime;

        const lineCurrentX = startX + distanceX * elapsedTime;
        const lineCurrentY = startY + distanceY * elapsedTime;

        const numCompletedPoints = Math.ceil(
          (elapsedTime / duration) * numPoints
        );

        if ((lineCurrentX > endX || lineCurrentY < endY) && firstRender.value) {
          isShow.value = false;
          opacity.value = 0;

          ctx.setLineDash([1, 10]);
          ctx.lineDashOffset = 0;
          drawLineCircle(ctx, points, numCompletedPoints);

          ctx.setLineDash([]);

          setTimeout(() => {
            firstRender.value = false;
          }, duration);
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
            height: '100%',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
            transform: `translateY(${-transform * 0.1}%)`,
          }}
          class="trans-10-opacity"
        >
          <Image
            width={1518}
            height={854}
            sources={sources.planets}
            src={planetsPngXl}
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
            height: '100%',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
            transform: `translate(${transform * 0.2}%, ${-transform * 0.1}%)`,
          }}
          class="trans-10-opacity"
        >
          <Image
            width={1518}
            height={854}
            sources={sources.rightCrystal}
            src={rightCystalPngXl}
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
            height: '100%',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
            transform: `translate(${-transform * 0.2}%, ${-transform * 0.1}%)`,
          }}
          class="trans-10-opacity"
        >
          <Image
            width={1518}
            height={854}
            sources={sources.leftCrystal}
            src={leftCystalPngXl}
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
            height: '100%',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
          }}
          class="trans-10-opacity"
        >
          <Image
            width={1518}
            height={854}
            sources={sources.arc}
            src={arcPngXl}
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
            height: '100%',
            visibility: isShow.value ? 'visible' : 'hidden',
            opacity: isShow.value ? '1' : '0',
          }}
          class="trans-10-opacity"
        >
          <Image
            width={1518}
            height={854}
            sources={sources.arcDesertReverse}
            src={arcDessertReversePngXl}
            fitPosition="bottom"
            alt="hero"
          ></Image>
        </figure>
        <canvas
          style={{ position: 'fixed', top: '0', left: '0', zIndex: '-1' }}
          class={styles.entryAnimation}
          ref={canvasRef}
        ></canvas>
      </>
    );
  }
);

export default Background;
