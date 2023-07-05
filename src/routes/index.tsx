import {
  $,
  component$,
  useSignal,
  useVisibleTask$,
  useStore,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './home.module.css';
import Wheel from '~/components/ScrollDown/Wheel';
import RegularBtn from '~/components/button/RegularBtn';
import Background from '~/components/layouts/background/background';
import BorderCard from '~/components/layouts/card/BorderCard';
import ImageCard from '~/components/layouts/card/ImageCard';
import Image from '~/components/Image/Image';
import SideBar from '~/components/sidebar/SideBar';
import Divider from '~/components/divider/Divider';
import {
  WebDesignAndSystemDesignTranscript,
  ProtofolioTranscript,
} from '~/Transcript';

export default component$(() => {
  const showSlogan = useSignal(false);
  const containerEl = useSignal<HTMLElement>();
  const itemElRef = useStore<HTMLElement[]>([]);
  const activeSection = useSignal<string>('#hero');

  useVisibleTask$(() => {
    setTimeout(() => {
      showSlogan.value = true;
    }, 3000);
  });

  const addElementRef = $((element: Element) => {
    itemElRef.push(element as HTMLElement);
  });

  return (
    <>
      {/* Layouts */}
      <Background></Background>
      <SideBar
        style={{
          visibility: showSlogan.value ? 'visible' : 'hidden',
          opacity: showSlogan.value ? '1' : '0',
          transition: 'all 0.3s ease-in',
        }}
      >
        <Divider
          type="verticle"
          width="0.5px"
          links={['#hero', '#webDesign', '#protofolio']}
          active={activeSection.value}
        ></Divider>
      </SideBar>

      {/* Body */}
      <div
        // onScroll$={scroll}
        ref={containerEl}
        class={styles['scroll-snap-type-y-mandatory']}
      >
        {/* Hero */}
        <section
          ref={addElementRef}
          id="hero"
          class={[styles.home, styles['grid-center']]}
          style={{
            visibility: showSlogan.value ? 'visible' : 'hidden',
            opacity: showSlogan.value ? '1' : '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <article
            class={[styles.slogan, 'grid-center', 'my-10']}
            style={{
              visibility: showSlogan.value ? 'visible' : 'hidden',
              opacity: showSlogan.value ? '1' : '0',
            }}
          >
            <div style={{ marginRight: '20vw' }} class={styles['slogan-box']}>
              <h2 class={[styles['slogan-text'], 'font-zen-maru']}>
                Full Service for Impact Brand
              </h2>
              <h2 class={styles['slogan-text-sm']}>為你的品牌注入全新力量</h2>
              <RegularBtn
                style="margin-top:25px;font-family: 'Zen Maru Gothic', sans-serif;"
                size="lg"
              >
                More
              </RegularBtn>
            </div>
          </article>

          <Wheel></Wheel>
        </section>

        {/* Web Design and System Design */}
        <section ref={addElementRef} id="webDesign" class={[styles.home]}>
          <article
            class={[styles.slogan, 'grid-center']}
            style={{
              visibility: showSlogan.value ? 'visible' : 'hidden',
              opacity: showSlogan.value ? '1' : '0',
              padding: '20px 0px',
            }}
          >
            <div class={[styles['slogan-box'], styles['home-section']]}>
              <h2 class={styles['slogan-text-sm']}>網頁設計與系統開發</h2>
              <h2 class={[styles['slogan-text-sm'], 'font-zen-maru']}>
                Web design & System design
              </h2>
            </div>

            <div
              class={[
                styles['web-design-and-system-design-container'],
                styles['home-section'],
                'mt-5',
              ]}
            >
              {WebDesignAndSystemDesignTranscript.map(
                ({ title, content }, i) => (
                  <BorderCard key={title}>
                    <slot q:slot="title">
                      <div class={styles['title-container']}>
                        <h2 class={[styles.sequence, 'font-zen-maru']}>
                          0{i + 1}
                        </h2>
                        <h2 class={styles.title}>{title}</h2>
                      </div>
                    </slot>
                    <slot q:slot="content">
                      <div class={styles['content-container']}>
                        <p class={styles['content']}> {content}</p>
                      </div>
                    </slot>
                  </BorderCard>
                )
              )}
            </div>
          </article>
        </section>

        {/* Protfolio */}
        <section ref={addElementRef} id="protofolio" class={[styles.home]}>
          <article
            class={[styles.slogan, 'grid-center']}
            style={{
              visibility: showSlogan.value ? 'visible' : 'hidden',
              opacity: showSlogan.value ? '1' : '0',
              padding: '20px 0px',
            }}
          >
            <div class={[styles['slogan-box'], styles['home-section']]}>
              <h2 class={styles['slogan-text-sm']}>合作案列</h2>
              <h2 class={[styles['slogan-text-sm'], 'font-zen-maru']}>
                Protfolio
              </h2>
            </div>

            <div
              class={[
                styles['protofolio-container'],
                styles['home-section'],
                'mt-5',
              ]}
            >
              {ProtofolioTranscript.map(({ title, src, alt }, i) => (
                <ImageCard title={title} key={title + i}>
                  <slot q:slot="img">
                    <Image src={src} alt={alt}></Image>
                  </slot>
                </ImageCard>
              ))}
            </div>
          </article>
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'CRYSTAL BIT. | 首頁',
  meta: [
    {
      name: 'description',
      content: 'CRYSTAL BIT. 網頁設計, 系統設計, UI/UX 規劃 ',
    },
  ],
};
