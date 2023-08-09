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
import Background from '~/components/layouts/background/background';
import ImageCard from '~/components/layouts/card/ImageCard';
import BorderCard from '~/components/layouts/card/BorderCard';
import SolidCard from '~/components/layouts/card/SolidCard';
import Image from '~/components/Image/Image';
import SideBar from '~/components/sidebar/SideBar';
import Divider from '~/components/divider/Divider';
import { UFO } from '~/components/icons/ufo';
import TransformY from '~/components/Transition/transformY';
import arcPng from '~/assets/arc.png';
import arcReverse from '~/assets/contact/arcReverse.png';
import {
  ProtofolioTranscript,
  ServiceTranscript,
  PartnerTranscript,
  ProcessTranscript,
} from '~/Transcript';
import { headerHandlerContext } from '~/store/globalStore';
import Contact from '~/components/Section/Contact';

export default component$(() => {
  const showSlogan = useSignal(false);
  const containerEl = useSignal<HTMLElement>();
  const itemElRef = useStore<HTMLElement[]>([]);
  const activeSection = useSignal<string>('#hero');
  const heroTransform = useSignal<number>(0);
  const showButtomDesert = useSignal(false);

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
    const sectionHeight = (document.querySelector('#hero') as HTMLElement)
      .clientHeight;

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

    if (activeNumber >= 2.5) {
      showButtomDesert.value = true;
    } else {
      showButtomDesert.value = false;
    }

    if (activeNumber > 1) {
      headerHandler.active();
    } else {
      headerHandler.inactive();
    }

    if (activeNumber < 1.14) {
      activeSection.value = '#hero';
    }
    if (activeNumber >= 1.14 && activeNumber < 3.5) {
      activeSection.value = '#protofolio';
    }

    if (activeNumber >= 3.5 && activeNumber < 4.4) {
      activeSection.value = '#service';
    }

    if (activeNumber >= 4.4 && activeNumber < 4.5) {
      activeSection.value = '#partner';
    }

    if (activeNumber >= 4.5 && activeNumber < 4.95) {
      activeSection.value = '#process';
    }

    if (activeNumber >= 4.95) {
      activeSection.value = '#contact';
    }
  });

  const redirectToContact = $(() => {
    window.location.href = '#contact';
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
          links={[
            '#hero',
            '#protofolio',
            '#service',
            '#partner',
            '#process',
            '#contact',
          ]}
          active={activeSection.value}
        ></Divider>
      </SideBar>
      <Background
        showButtomDesert={showButtomDesert.value}
        transform={heroTransform.value}
      ></Background>
      {/* Body */}
      <div
        onScroll$={scroll}
        ref={containerEl}
        class={[
          styles['scroll-snap-type-y-mandatory'],
          activeSection.value === '#hero' ||
          activeSection.value === '#contact' ||
          activeSection.value === '#process'
            ? null
            : 'bg-dark-blue',
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
                event={redirectToContact}
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
          width="1920"
          height="137"
          style="object-fit: cover;transform:translateY(5px);width:100%"
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
              paddingBottom: '140px',
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
                  <div key={title + i} class={styles['protofolio-item']}>
                    <a href={href} target="_blank" rel="noreferrer noopener">
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
                  </div>
                )
              )}
            </div>
            <div style="margin-top:80px">
              {/* <BubbleBtn>see more</BubbleBtn> */}
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
              <h2 class={[styles['slogan-text-sm'], 'letter-spacing-2']}>
                服務項目
              </h2>
              <UFO width={350}></UFO>
            </div>

            <div
              class={[
                styles['service-container'],
                styles['home-section'],
                'bg-dark-blue',
              ]}
            >
              {ServiceTranscript.map(({ title, engTitle, content }, i) => (
                <BorderCard
                  key={title}
                  index={i}
                  title={title}
                  engTitle={engTitle}
                  content={content}
                ></BorderCard>
              ))}
            </div>
          </article>
        </section>

        {/* partner */}
        <section
          ref={addElementRef}
          id="partner"
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
                PARTNER
              </h2>
              <h2 class={[styles['slogan-text-sm'], 'letter-spacing-2']}>
                合作夥伴
              </h2>
            </div>

            <div
              class={[
                styles['partner-container'],
                styles['home-section'],
                'bg-dark-blue',
              ]}
            >
              {PartnerTranscript.map(
                ({ width, height, href, src, sources, alt }, i) => (
                  <TransformY key={href + i} index={i}>
                    <a href={href} target="_blank" rel="noreferrer">
                      <Image
                        width={width}
                        height={height}
                        src={src}
                        sources={sources}
                        alt={alt}
                      ></Image>
                    </a>
                  </TransformY>
                )
              )}
            </div>
          </article>
        </section>

        {/* process */}
        <section
          ref={addElementRef}
          id="process"
          class={[styles.home, 'bg-dark-blue']}
        >
          <article
            class={[styles.slogan, 'grid-center', 'bg-dark-blue']}
            style={{
              visibility: showSlogan.value ? 'visible' : 'hidden',
              opacity: showSlogan.value ? '1' : '0',
              height: '100%',
              paddingTop: '180px',
              paddingBottom: '360px',
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
                PROCESS
              </h2>
              <h2 class={[styles['slogan-text-sm'], 'letter-spacing-2']}>
                合作流程
              </h2>
            </div>

            <div class={[styles['process-container'], styles['home-section']]}>
              {ProcessTranscript.map(({ content }, i) => (
                <TransformY key={content + i} index={i}>
                  <SolidCard content={content} index={i}></SolidCard>
                </TransformY>
              ))}
            </div>
          </article>
        </section>

        <img
          width="1920"
          height="137"
          style="object-fit: cover;transform:translateY(-5px);width:100vw"
          src={arcReverse}
          alt="arc"
        ></img>

        {/* contact */}

        <Contact
          active={activeSection.value === '#contact'}
          showSlogan={showSlogan.value}
          zIndex={-2}
        ></Contact>

        {/* 123124 */}
        <section
          id="emptySpace"
          style={{
            height: '20%',
            pointerEvents: 'none',
          }}
        ></section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title:
    'CRYSTAL BIT. | 首頁 - 桃園中壢網頁設計, 桃園中壢系統設計, 桃園中壢 UI/UX 規劃, Email 伺服器架設, 桃園中壢雲端空間架設等等的專業網站設計及系統設計服務公司',
  meta: [
    {
      name: 'description',
      content:
        '位於桃園中壢的CRYSTAL BIT. 是桃園中壢網頁設計, 桃園中壢系統設計, 桃園中壢 UI/UX 規劃, Email 伺服器架設, 桃園中壢網站雲端空間架設等等的專業網站設計及系統設計服務公司, 網站設計, 系統設計, 雲端伺服器架設, Email 伺服器架設找CRYSTAL BIT. 就對了! ',
    },
  ],
};
