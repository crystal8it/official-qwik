import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <div class={styles.anchor}>
          <span>© CRYSTAL BIT.</span>
        </div>
      </div>
    </footer>
  );
});
