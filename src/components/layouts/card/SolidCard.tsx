import { component$ } from "@builder.io/qwik";
import styles from "./card.module.css";

type SolidCardProps = {
  index: number;
  content: string;
};

export default component$(({ index, content }: SolidCardProps) => {
  return (
    <article
      class={[styles["solid-card"], styles["card"], styles[`bg-${index + 1}`]]}
    >
      <div class={styles["title-container"]}>
        <p class={[styles["index"], "font-zen-maru"]}>0{index + 1}</p>
      </div>

      <div class={styles["content-container"]}>
        <p class={styles["content"]}>{content}</p>
      </div>
    </article>
  );
});
