import { component$, Slot } from '@builder.io/qwik';
import styles from './Btn.module.css';

type btn = {
  size?: 'sm' | 'md' | 'lg';
  style?: any;
};

export default component$(({ size = 'sm', style }: btn) => {
  return (
    <button class={[styles.btn, styles[size]]} style={style}>
      <Slot></Slot>
    </button>
  );
});
