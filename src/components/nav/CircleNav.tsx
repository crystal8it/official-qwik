import { component$ } from "@builder.io/qwik";
import styles from "./CircleNav.module.css";

type circleNavProps = {
  style?: any;
};

export default component$(({ style }: circleNavProps) => {
  return (
    <svg
      style={{ ...style }}
      class={styles["half-circle"]}
      width="500px"
      height="500px"
    >
      <ellipse
        cx="250"
        cy="250"
        rx="250"
        ry="250"
        stroke="#fff"
        stroke-width="0.5"
        fill="transparent"
      />
    </svg>
  );
});
