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
import sendEmail from '~/utils/email';
import Wheel from '~/components/ScrollDown/Wheel';
import RegularBtn from '~/components/button/RegularBtn';
// import BubbleBtn from '~/components/button/BubbleBtn';
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

type Contact = {
  name: string;
  phone: string;
  email: string;
  company: string;
  demand: { value: string[]; items: string[] };
  comment: string;
};

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

  const formData = useStore<Contact>({
    name: '',
    phone: '',
    email: '',
    company: '',
    demand: {
      value: [],
      items: ['網頁設計', 'App設計', 'ERP設計', 'UI/UX設計', '其它'],
    },
    comment: '',
  });

  const resetFormData = $(() => {
    formData.name = '';
    formData.phone = '';
    formData.email = '';
    formData.company = '';
    formData.demand = {
      value: [],
      items: ['網頁設計', 'App設計', 'ERP設計', 'UI/UX設計', '其它'],
    };
    formData.comment = '';
  });

  const sendEmailHandler = $(async () => {
    if (formData.name === '' || formData.phone === '') {
      window.alert('請輸入姓名與電話');

      return;
    }

    const res = await sendEmail(
      formData.name,
      formData.phone,
      formData.email,
      formData.company,
      formData.demand.value.join(','),
      formData.comment
    );

    if (res === true) {
      window.alert('訊息已成功寄出,我們會盡快與您聯繫,謝謝!');
      resetFormData();
    } else {
      window.alert('訊息發送失敗,請稍後再嘗試!');
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
          // @ts-ignore:next-line
          width="100%"
          // @ts-ignore:next-line
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
                ({ title, subTitle, href, tag, src, sources, alt }, i) => (
                  <div key={title + i} class={styles['protofolio-item']}>
                    <a href={href} target="_blank" rel="noreferrer noopener">
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
              {PartnerTranscript.map(({ href, src, sources, alt }, i) => (
                <TransformY key={href + i} index={i}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <Image src={src} sources={sources} alt={alt}></Image>
                  </a>
                </TransformY>
              ))}
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
          // @ts-ignore:next-line
          width="100%"
          // @ts-ignore:next-line
          height="auto"
          style="object-fit: cover;transform:translateY(-5px)"
          src={arcReverse}
          alt="arc"
        ></img>

        {/* contact */}

        <section
          ref={addElementRef}
          id="contact"
          class={[styles.home]}
          style={{
            position:
              activeSection.value === '#contact' ? 'sticky' : 'relative',
            bottom: '0px',
            height: '100%',
            zIndex: -2,
          }}
        >
          <article
            class={[styles.slogan, styles['contact-padding']]}
            style={{
              visibility: showSlogan.value ? 'visible' : 'hidden',
              opacity: showSlogan.value ? '1' : '0',
              height: '100%',
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
                CONTACT
              </h2>
              <h2 class={[styles['slogan-text-sm'], 'letter-spacing-2']}>
                聯絡我們
              </h2>
            </div>

            <TransformY index={0}>
              <div
                class={[styles['contact-container'], styles['home-section']]}
              >
                <form>
                  {/* input */}
                  <div>
                    <label>
                      <p>姓名</p>
                      <input
                        onInput$={(event) => {
                          formData.name = (
                            event.target as HTMLInputElement
                          ).value;
                        }}
                        class={styles['custom-input']}
                        value={formData.name}
                        type="text"
                      />
                    </label>
                    <label>
                      <p>聯絡電話</p>
                      <input
                        onInput$={(event) => {
                          formData.phone = (
                            event.target as HTMLInputElement
                          ).value;
                        }}
                        value={formData.phone}
                        class={styles['custom-input']}
                        type="text"
                      />
                    </label>

                    <label>
                      <p>聯絡信箱</p>
                      <input
                        onInput$={(event) => {
                          formData.email = (
                            event.target as HTMLInputElement
                          ).value;
                        }}
                        value={formData.email}
                        class={styles['custom-input']}
                        type="text"
                      />
                    </label>

                    <label>
                      <p>公司名稱</p>
                      <input
                        onInput$={(event) => {
                          formData.company = (
                            event.target as HTMLInputElement
                          ).value;
                        }}
                        value={formData.company}
                        class={styles['custom-input']}
                        type="text"
                      />
                    </label>
                    {/* checkbox */}

                    <div class={styles['div-label']}>
                      <p>需求</p>

                      <div class={styles['checkbox-container']}>
                        {formData.demand.items.map((content) => (
                          <label key={content} class="customer-check-box">
                            <input
                              onInput$={(event) => {
                                if (
                                  (event.target as HTMLInputElement).checked
                                ) {
                                  formData.demand.value = [
                                    ...formData.demand.value,
                                    content,
                                  ];
                                } else {
                                  formData.demand.value = [
                                    ...formData.demand.value.filter(
                                      (item) => item !== content
                                    ),
                                  ];
                                }
                              }}
                              checked={formData.demand.value.includes(content)}
                              type="checkbox"
                            />
                            <span class="checkmark"></span>
                            <p>{content}</p>
                          </label>
                        ))}
                      </div>
                    </div>

                    <label>
                      <p>備註</p>
                      <textarea
                        onInput$={(event) => {
                          formData.comment = (
                            event.target as HTMLInputElement
                          ).value;
                        }}
                        value={formData.comment}
                        style=" height:100px"
                        class={styles['custom-input']}
                      ></textarea>
                    </label>
                  </div>

                  {/* button */}
                  <div>
                    <RegularBtn event={sendEmailHandler} size="lg">
                      送出
                    </RegularBtn>
                  </div>
                </form>
              </div>
            </TransformY>
          </article>
        </section>

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
  title: 'CRYSTAL BIT. | 首頁',
  meta: [
    {
      name: 'description',
      content: 'CRYSTAL BIT. 網頁設計, 系統設計, UI/UX 規劃 ',
    },
  ],
};
