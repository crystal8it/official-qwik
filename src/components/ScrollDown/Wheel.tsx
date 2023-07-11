import { component$ } from '@builder.io/qwik';
import styles from './Wheel.module.css';

type WheelProps = {
  rotate?: boolean;
  hideText?: boolean;
};

export default component$(
  ({ rotate = false, hideText = false }: WheelProps) => {
    return (
      <div class={styles['rwd-wheel-position']}>
        <div
          class={styles.mouseBody}
          style={rotate ? { rotate: '270deg' } : {}}
        >
          <div class={styles.mouseWheel}></div>
        </div>
        {hideText ? null : <h2 class={styles.textCenter}>Scroll</h2>}
      </div>
    );
  }
);
