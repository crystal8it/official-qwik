import { useSignal, component$, Slot, useVisibleTask$ } from '@builder.io/qwik';
import Divider from '~/components/divider/Divider';
import styles from './card.module.css';

export default component$(() => {
  const isShow = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    isShow.value = true;
    console.log('border');
    cleanup(() => (isShow.value = false));
  });

  return (
    <article
      class={[
        styles['border-card'],
        styles['card'],
        'hidden',
        isShow.value ? 'show' : '',
      ]}
    >
      <div>
        <Slot name="title"></Slot>
      </div>
      <Divider color="#fff"></Divider>
      <div>
        <Slot name="content"></Slot>
      </div>
    </article>
  );
});
