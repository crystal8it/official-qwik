import { useSignal, component$, Slot, useVisibleTask$ } from '@builder.io/qwik';
import styles from './card.module.css';

type cardProps = {
  index: number;
  title: string;
  subTitle: string;
  tag: string[];
};

export default component$(({ index, title, subTitle, tag }: cardProps) => {
  const isShow = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    isShow.value = true;

    cleanup(() => (isShow.value = false));
  });

  return (
    <article
      class={[
        styles['image-card'],
        styles['card'],
        `hidden-${index % 2 === 0 ? '1' : '2'}`,
        isShow.value ? `show` : '',
      ]}
    >
      <div style="wdith: 100%;aspect-ratio: 3 / 4">
        <Slot name="img"></Slot>
      </div>
      <div class={[styles['title'], 'mt-3']}>
        <p>{title}</p>
        <p>{subTitle}</p>
        <div class={styles['tag-container']}>
          {tag.map((t, i) => (
            <p key={i + t} class={styles['tag']}>
              #{t}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
});
