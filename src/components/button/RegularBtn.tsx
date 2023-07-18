import { component$, Slot } from '@builder.io/qwik';
import styles from './Btn.module.css';

type btn = {
  size?: 'sm' | 'md' | 'lg';
  style?: any;
  event?: any;
};

export default component$(({ size = 'sm', style, event }: btn) => {
  return (
    <button
      preventdefault:click
      onClick$={event}
      class={[styles.btn, styles[size]]}
      style={style}
    >
      <Slot></Slot>
    </button>
  );
});
