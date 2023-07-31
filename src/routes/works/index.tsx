import { component$ } from '@builder.io/qwik';
import { type DocumentHead, Link } from '@builder.io/qwik-city';
import styles from './works.module.css';
import WorksTranscript from '~/Transcript/works';
import ImageCard from '~/components/layouts/card/ImageCard';
import Image from '~/components/Image/Image';
import If from '~/components/If/If';

export default component$(() => {
  return (
    <div class={[styles['scroll-snap-type-y-mandatory'], 'bg-dark-blue']}>
      <section class={[styles.works, 'bg-dark-blue']}>
        <article
          class={[styles.slogan, 'bg-dark-blue']}
          style={{
            visibility: 'visible',
            opacity: '1',
            height: '100%',
            paddingTop: '70px',
          }}
        >
          <div class={[styles['slogan-box'], styles['works-section']]}>
            <h2
              class={[
                styles['slogan-text'],
                'font-zen-maru',
                'letter-spacing-2',
              ]}
            >
              WORKS
            </h2>
            <div style="display:flex;justify-content:space-between">
              <h2 class={[styles['slogan-text-sm'], 'letter-spacing-2']}>
                合作案例
              </h2>
            </div>
          </div>

          <div
            class={[
              styles['protofolio-container'],
              styles['works-section'],
              'bg-dark-blue',
            ]}
          >
            {WorksTranscript.map(
              (
                {
                  title,
                  subTitle,
                  href,
                  tag,
                  width,
                  height,
                  src,
                  sources,
                  alt,
                },
                i
              ) => (
                <div
                  style="cursor:pointer"
                  key={title + i}
                  class={styles['protofolio-item']}
                >
                  <If condition={href.type === 'inside'}>
                    <Link href={href.url}>
                      <ImageCard
                        title={title}
                        subTitle={subTitle}
                        tag={tag}
                        index={i}
                      >
                        <slot q:slot="img">
                          <Image
                            width={width}
                            height={height}
                            src={src}
                            sources={sources}
                            alt={alt}
                          ></Image>
                        </slot>
                      </ImageCard>
                    </Link>
                  </If>
                  <If condition={href.type === 'outside'}>
                    <a
                      href={href.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImageCard
                        title={title}
                        subTitle={subTitle}
                        tag={tag}
                        index={i}
                      >
                        <slot q:slot="img">
                          <Image
                            width={width}
                            height={height}
                            src={src}
                            sources={sources}
                            alt={alt}
                          ></Image>
                        </slot>
                      </ImageCard>
                    </a>
                  </If>
                </div>
              )
            )}
          </div>
          <div style="margin-top:80px">
            {/* <BubbleBtn>see more</BubbleBtn> */}
          </div>
        </article>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'CRYSTAL BIT. | 合作案例',
};
