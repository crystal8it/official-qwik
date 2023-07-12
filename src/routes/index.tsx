import {
  $,
  component$,
  useSignal,
  useVisibleTask$,
  useStore,
  useContext,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './home.module.css';
import Wheel from '~/components/ScrollDown/Wheel';
import RegularBtn from '~/components/button/RegularBtn';
import BubbleBtn from '~/components/button/BubbleBtn';
import Background from '~/components/layouts/background/background';
import ImageCard from '~/components/layouts/card/ImageCard';
import Image from '~/components/Image/Image';
import SideBar from '~/components/sidebar/SideBar';
import Divider from '~/components/divider/Divider';
import arcPng from '~/assets/arc.png';
import { ProtofolioTranscript } from '~/Transcript';
import { headerHandlerContext } from '~/store/globalStore';

export default component$(() => {
  const showSlogan = useSignal(false);
  const containerEl = useSignal<HTMLElement>();
  const itemElRef = useStore<HTMLElement[]>([]);
  const activeSection = useSignal<string>('#hero');
  const heroTransform = useSignal<number>(0);

  const headerHandler = useContext(headerHandlerContext);

  useVisibleTask$(() => {
    setTimeout(() => {
      showSlogan.value = true;
    }, 2000);
  });

  const addElementRef = $((element: Element) => {
    itemElRef.push(element as HTMLElement);
  });

  const scroll = $((e: any) => {
    const sectionHeight = itemElRef[0].clientHeight;
    const activeNumber = e.target.scrollTop / sectionHeight;

    if (heroTransform.value <= 100 && heroTransform.value >= 0) {
      heroTransform.value = Math.trunc(activeNumber * 100);
    }

    if (heroTransform.value > 100) {
      heroTransform.value = 100;
    }

    if (heroTransform.value < 0) {
      heroTransform.value = 0;
    }

    if (activeNumber > 1) {
      headerHandler.active();
    } else {
      headerHandler.inactive();
    }

    if (activeNumber < 1.2) {
      activeSection.value = '#hero';
    }
    if (activeNumber >= 1.2 && activeNumber < 3) {
      activeSection.value = '#protofolio';
    }
    if (activeNumber >= 3 && activeNumber < 4) {
      activeSection.value = '#service';
    }
  });

  return (
    <>
      {/* Layouts */}
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
          links={['#hero', '#protofolio', '#webDesign']}
          active={activeSection.value}
        ></Divider>
      </SideBar>
      <Background transform={heroTransform.value}></Background>
      {/* Body */}
      <div
        onScroll$={scroll}
        ref={containerEl}
        class={[
          styles['scroll-snap-type-y-mandatory'],
          activeSection.value === '#hero' ? null : 'bg-dark-blue',
        ]}
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
            justifyContent: 'center',
            position: activeSection.value === '#hero' ? 'sticky' : 'relative',
            top: '0',
            height: '100%',
          }}
        >
          <article
            class={[styles.slogan, 'my-10', styles.banner]}
            style={{
              visibility: showSlogan.value ? 'visible' : 'hidden',
              opacity: showSlogan.value ? '1' : '0',
            }}
          >
            <div class={[styles['slogan-box'], styles.banner]}>
              <h2
                class={[styles['slogan-text'], styles.banner, 'font-zen-maru']}
              >
                Full Service for Impact Brand
              </h2>
              <h2 class={[styles['slogan-text-sm'], styles.banner]}>
                為你的品牌注入全新力量
              </h2>
              <RegularBtn
                style="margin-top:25px;font-family: 'Zen Maru Gothic', sans-serif;"
                size="lg"
              >
                contact us
              </RegularBtn>
            </div>
          </article>

          <Wheel></Wheel>
        </section>

        <img
          width="100%"
          height="auto"
          style="object-fit: cover;transform:translateY(5px)"
          src={arcPng}
          alt="arc"
        ></img>
        {/* Protfolio */}
        <section
          ref={addElementRef}
          id="protofolio"
          class={[styles.home, 'bg-dark-blue']}
        >
          <article
            class={[styles.slogan, 'grid-center', 'bg-dark-blue']}
            style={{
              visibility: showSlogan.value ? 'visible' : 'hidden',
              opacity: showSlogan.value ? '1' : '0',
              height: '100%',
              paddingTop: '140px',
            }}
          >
            <div class={[styles['slogan-box'], styles['home-section']]}>
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
                styles['home-section'],
                'bg-dark-blue',
              ]}
            >
              {ProtofolioTranscript.map(
                ({ title, subTitle, tag, src, sources, alt }, i) => (
                  <div key={title + i} class={styles['protofolio-item']}>
                    <ImageCard
                      title={title}
                      subTitle={subTitle}
                      tag={tag}
                      index={i}
                    >
                      <slot q:slot="img">
                        <Image src={src} sources={sources} alt={alt}></Image>
                      </slot>
                    </ImageCard>
                  </div>
                )
              )}
            </div>
            <div style="margin-top:80px">
              <BubbleBtn>see more</BubbleBtn>
            </div>
          </article>
        </section>

        {/* service */}
        <section
          ref={addElementRef}
          id="service"
          class={[styles.home, 'bg-dark-blue']}
        >
          <article
            class={[styles.slogan, 'grid-center', 'bg-dark-blue']}
            style={{
              visibility: showSlogan.value ? 'visible' : 'hidden',
              opacity: showSlogan.value ? '1' : '0',
              height: '100%',
              paddingTop: '140px',
            }}
          >
            <div class={[styles['slogan-box'], styles['home-section']]}>
              <h2
                class={[
                  styles['slogan-text'],
                  'font-zen-maru',
                  'letter-spacing-2',
                ]}
              >
                SERVICE
              </h2>
              <div style="display:flex;justify-content:space-between">
                <h2 class={[styles['slogan-text-sm'], 'letter-spacing-2']}>
                  服務項目
                </h2>
              </div>
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
