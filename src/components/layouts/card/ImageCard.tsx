import { useSignal, component$, Slot, useVisibleTask$ } from '@builder.io/qwik';
import styles from './card.module.css';

type cardProps = {
  index: number;
  title?: string;
};

export default component$(({ index, title }: cardProps) => {
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
        `hidden-${index}`,
        isShow.value ? `show` : '',
      ]}
    >
      <div style="height: 85%;">
        <Slot name="img"></Slot>
      </div>
      <div class={[styles['title'], 'mt-3']}>
        <span>{title}</span>
      </div>
    </article>
  );
});
