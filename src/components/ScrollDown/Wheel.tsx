import { component$ } from '@builder.io/qwik';
import styles from './Wheel.module.css';

export default component$(() => {
  return (
    <div>
      <div class={styles.mouseBody}>
        <div class={styles.mouseWheel}></div>
      </div>
      <h2 class={styles.textCenter}>Scroll</h2>
    </div>
  );
});
