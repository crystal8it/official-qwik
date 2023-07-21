import { component$, $ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './work.module.css';
import LinearBtn from '~/components/button/LinearBtn';

export const useWorks = routeLoader$(async (requestEvent) => {
  const name = requestEvent.params.name;

  return { title: name, text: name, href: 'https://support.thrct.org' };
});

export default component$(() => {
  const signal = useWorks();

  const clickRedirect = $(() => {
    const a = document.createElement('a');
    a.href = signal.value.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  });

  return (
    <article class={[styles['work-container'], 'bg-dark-blue']}>
      <section class={styles.banner}>
        <div></div>

        <div class={styles['title-container']}>
          <h2 class={[styles.title, styles.eng]}>Ilens Sales Location Page</h2>
          <h2 class={styles.title}>{signal.value.title}</h2>
          <div class={styles['tag-container']}>
            <p class={styles.tag}>#活動網站</p>
            <p class={styles.tag}>#公益行銷</p>
          </div>
        </div>
      </section>
      <div class={styles['content-background']}>
        <section class={styles.content}>
          <div class={styles['content-section']}>
            <div class={styles['text-container']}>
              <h2>客戶簡介</h2>
              <p>
                財團法人方興中馬匹輔學健康社福基金會致力推廣身心障礙馬術治療，旗下的希望馬場為全台唯一身心障礙者馬匹輔助教育團隊，提供專業馬術治療課程，並定期舉辦馬術比賽和相關公益活動，讓身心障礙者有機會接觸和參與馬術運動展現自我。
              </p>
            </div>
            <div class={styles['img-container']} id="sec-1-img"></div>
          </div>

          <div style="margin-top:100px" class={[styles['content-section']]}>
            <div class={styles['img-container']} id="sec-2-img"></div>
            <div class={styles['text-container']}>
              <div>
                <h2>專案背景</h2>
                <p>
                  馬術治療的場地、設備、馬匹培育和專業人員等，每年皆需支出龐大的經費，為使希望馬場能永續經營並為身心障礙學童分擔經濟重擔，期望藉助募資網站匯集社會大眾的力量，讓更多身心障礙者在"馬"上看到希望。
                </p>
              </div>
              <div style="margin-top:50px">
                <h2>設計概念</h2>
                <p>
                  延續官網的配色與設計，除了募款內容外還另設計募款目標和階段動畫以及贊助人次等，讓捐款者清楚知道捐款進度和金額，並引導捐款者回到財團法人方興中馬匹輔學健康社福基金會的官網進行捐款
                </p>
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

export const head: DocumentHead = ({ resolveValue, params }) => {
  const work = resolveValue(useWorks);
  return {
    title: `CRYSTAL BIT. | 合作案例 - ${work.title}`,
    meta: [
      {
        name: 'description',
        content: work.text,
      },
      {
        name: 'id',
        content: params.jokeId,
      },
    ],
  };
};
