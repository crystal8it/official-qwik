import { component$, $, useStore } from '@builder.io/qwik';
import { useLocation, type StaticGenerateHandler } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './work.module.css';
import LinearBtn from '~/components/button/LinearBtn';
import WorkTranscript from '~/Transcript/work-id';
import loadWorkNames from './loadWorkNames';

export default component$(() => {
  const { params } = useLocation();
  const name = params.name;

  const signal = useStore(WorkTranscript[name]);

  const clickRedirect = $(() => {
    const a = document.createElement('a');
    a.href = signal.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  });

  return (
    <article class={[styles['work-container'], 'bg-dark-blue']}>
      <section class={styles.banner}>
        <div></div>

        {/* banner */}
        <div class={styles['title-container']}>
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
      <div class={styles['content-background']}>
        <section class={styles.content}>
          <div class={styles['content-section']}>
            <div class={styles['text-container']}>
              <h2>客戶簡介</h2>
              <p>{signal.customerIntroduction.content}</p>
            </div>
            <div class={styles['img-container']} id="sec-1-img"></div>
          </div>

          <div style="margin-top:100px" class={[styles['content-section']]}>
            <div class={styles['img-container']} id="sec-2-img"></div>
            <div class={styles['text-container']}>
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
            </div>
          </div>
        </section>
      </div>
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
