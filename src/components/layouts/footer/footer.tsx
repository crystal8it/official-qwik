import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <div class={styles.anchor}>
          <span>Made with ♡ by Crystalbit</span>
          <span class={styles.spacer}>|</span>
        </div>
      </div>
    </footer>
  );
});
