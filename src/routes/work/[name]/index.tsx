import {
  component$,
  $,
  useStore,
  useSignal,
  useVisibleTask$,
  useContext,
} from '@builder.io/qwik';
import { useLocation, type StaticGenerateHandler } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './work.module.css';
import LinearBtn from '~/components/button/LinearBtn';
import loadWorkNames from './loadWorkNames';
import WorkTranscript from '~/Transcript/work-id';
import Image from '~/components/Image/Image';
import TransformY from '~/components/Transition/transformY';
import Contact from '~/components/Section/Contact';
import { headerHandlerContext } from '~/store/globalStore';

export default component$(() => {
  const { params } = useLocation();
  const name = params.name;

  const signal = useStore(WorkTranscript[name]);
  const isShow = useSignal(false);
  const height = window.innerHeight;
  const headerHandler = useContext(headerHandlerContext);

  useVisibleTask$(({ cleanup }) => {
    isShow.value = true;
    cleanup(() => (isShow.value = false));
  });

  const scroll = $((e: any) => {
    const activeNumber = e.target.scrollTop / height;

    if (activeNumber > 0.95) {
      headerHandler.active();
    } else {
      headerHandler.inactive();
    }
  });

  const clickRedirect = $(() => {
    const a = document.createElement('a');
    a.href = signal.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  });

  return (
    <article onScroll$={scroll} class={[styles['work-container']]}>
      {/* banner */}
      <section class={styles.banner}>
        <div
          class={[
            styles['img-container'],
            `hidden-${1}`,
            isShow.value ? 'show' : '',
          ]}
        >
          <Image
            width={800}
            height={500}
            obectFit="contain"
            fitPosition="center"
            src={signal.banner.image.src}
            sources={signal.banner.image.sources}
            alt={signal.banner.image.alt}
          ></Image>
        </div>

        <div
          class={[
            styles['title-container'],
            `hidden-${2}`,
            isShow.value ? 'show' : '',
          ]}
        >
          <h2 class={[styles.title, styles.eng]}>{signal.banner.eng}</h2>
          <h2 class={styles.title}>{signal.banner.cht}</h2>
          <div class={styles['tag-container']}>
            {signal.banner.tag.map((tag) => (
              <p key={tag} class={styles.tag}>
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* content */}
      <section class={styles['content-background']}>
        <section class={styles.content}>
          <div class={styles['content-section']}>
            <TransformY
              index={1}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              myClass={[styles['text-container']]}
            >
              <Image
                width={300}
                height={90}
                src={signal.customerIntroduction.logo.src}
                sources={signal.customerIntroduction.logo.sources}
                alt={signal.customerIntroduction.logo.alt}
              ></Image>
              <h2 class="mt-4">客戶簡介</h2>
              <p>{signal.customerIntroduction.content}</p>
            </TransformY>

            <TransformY index={3} myClass={[styles['text-container']]}>
              <Image
                width={800}
                height={500}
                obectFit="contain"
                fitPosition="center"
                src={signal.customerIntroduction.image.src}
                sources={signal.customerIntroduction.image.sources}
                alt={signal.customerIntroduction.image.alt}
              ></Image>
            </TransformY>
          </div>

          <div style="margin-top:100px" class={[styles['content-section']]}>
            <TransformY index={3} myClass={[styles['text-container']]}>
              <Image
                width={800}
                height={500}
                obectFit="contain"
                fitPosition="center"
                src={signal.projectBackground.image.src}
                sources={signal.projectBackground.image.sources}
                alt={signal.projectBackground.image.alt}
              ></Image>
            </TransformY>

            <TransformY index={1} myClass={[styles['text-container']]}>
              <div>
                <h2>專案背景</h2>
                <p>{signal.projectBackground.content}</p>
              </div>
              <div style="margin-top:50px">
                <h2>設計概念</h2>
                <p>{signal.designConcept.content}</p>
              </div>

              <LinearBtn
                event={clickRedirect}
                style={{ marginTop: '30px' }}
                size="xl"
              >
                前往網站 &nbsp; &nbsp; &rarr;
              </LinearBtn>
            </TransformY>
          </div>
        </section>
      </section>

      <section class={styles.footer}>
        <Contact zIndex={0}></Contact>
      </section>
    </article>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  // example of loading params for this use case
  // every implementation will be different
  const names = await loadWorkNames();

  return {
    params: names.map((name) => {
      return { name };
    }),
  };
};

export const head: DocumentHead = ({ params }) => {
  const name = params.name;

  return {
    title: `CRYSTAL BIT. | 合作案例 - ${WorkTranscript[name].banner.cht}`,
    meta: [
      {
        name: 'description',
        content: WorkTranscript[name].banner.cht,
      },
      {
        name: 'id',
        content: params.name,
      },
    ],
  };
};
