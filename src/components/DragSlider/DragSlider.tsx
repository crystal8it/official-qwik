import { component$, useStore } from '@builder.io/qwik';
import Wheel from '../ScrollDown/Wheel';
// import ImageCard from '../layouts/card/ImageCard';
// import Image from '../Image/Image';
// import { ProtofolioTranscript } from '~/Transcript';
import styles from '~/routes/home.module.css';

export default component$(
  ({
    addElementRef,
    showSlogan,
  }: {
    addElementRef: any;
    showSlogan: boolean;
  }) => {
    const onDragScrollStore = useStore<{
      isDown: boolean;
      lastX: number;
      velocity: number;
      transformX: number;
      trasformXLimit: number;
    }>({
      isDown: false,
      lastX: 0,
      velocity: 3,
      transformX: 0,
      trasformXLimit: -180,
    });

    return (
      <section
        onMouseDown$={(e) => {
          onDragScrollStore.isDown = true;
          onDragScrollStore.lastX = e.pageX;
        }}
        onMouseUp$={() => {
          onDragScrollStore.isDown = false;
        }}
        onMouseLeave$={() => {
          onDragScrollStore.isDown = false;
        }}
        onMouseMove$={(e) => {
          if (onDragScrollStore.isDown) {
            const currentX = e.pageX;

            if (onDragScrollStore.lastX === null) return;

            if (currentX < onDragScrollStore.lastX) {
              if (
                onDragScrollStore.transformX <= onDragScrollStore.trasformXLimit
              )
                return;

              onDragScrollStore.transformX -= onDragScrollStore.velocity;
            }

            if (currentX > onDragScrollStore.lastX) {
              if (onDragScrollStore.transformX >= 0) return;
              onDragScrollStore.transformX += onDragScrollStore.velocity;
            }

            onDragScrollStore.lastX = currentX;
          }
        }}
        ref={addElementRef}
        id="protofolio"
        class={[styles.home, 'bg-dark-blue']}
      >
        <article
          class={[styles.slogan, 'grid-center']}
          style={{
            visibility: showSlogan ? 'visible' : 'hidden',
            opacity: showSlogan ? '1' : '0',
            padding: '60px 0px',
            height: '100%',
          }}
        >
          <div class={[styles['slogan-box'], styles['home-section']]}>
            <h2 class={styles['slogan-text-sm']}>合作案列</h2>
            <div style="display:flex;justify-content:space-between">
              <h2 class={[styles['slogan-text-sm'], 'font-zen-maru']}>
                Protfolio
              </h2>
              <Wheel rotate={true} hideText={true}></Wheel>
              <div></div>
            </div>
          </div>

          <div
            style={{
              transform: `translateX(${onDragScrollStore.transformX}%)`,
            }}
            class={[
              styles['protofolio-container'],
              styles['home-section'],
              'mt-5',
            ]}
          >
            {/* {ProtofolioTranscript.map(({ title, src, alt }, i) => (
              <ImageCard title={title} key={title + i}  subTitle={title} index={i}>
                <slot q:slot="img">
                  <Image src={src} alt={alt}></Image>
                </slot>
              </ImageCard>
            ))} */}
          </div>
        </article>
      </section>
    );
  }
);
