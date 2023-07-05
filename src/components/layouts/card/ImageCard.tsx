import { useSignal, component$, Slot, useVisibleTask$ } from '@builder.io/qwik';
import styles from './card.module.css';

type cardProps = {
  title?: string;
};

export default component$(({ title }: cardProps) => {
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
        'hidden',
        isShow.value ? 'show' : '',
      ]}
    >
      <Slot name="img"></Slot>
      <div class={styles['title']}>
        <span>{title}</span>
      </div>
    </article>
  );
});
