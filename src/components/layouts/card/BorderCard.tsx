import { useSignal, component$, useVisibleTask$ } from "@builder.io/qwik";
import Divider from "~/components/divider/Divider";
import styles from "./card.module.css";

type BorderCardProps = {
  index: number;
  title: string;
  engTitle: string;
  content: string;
};

export default component$(
  ({ index, title, engTitle, content }: BorderCardProps) => {
    const isShow = useSignal(false);

    useVisibleTask$(({ cleanup }) => {
      isShow.value = true;
      cleanup(() => (isShow.value = false));
    });

    return (
      <article
        class={[
          styles["border-card"],
          styles["card"],
          `hidden-${index + 1}`,
          isShow.value ? "show" : "",
        ]}
      >
        <div class={styles["title-container"]}>
          <p class={[styles["index"], "font-zen-maru"]}>0{index + 1}</p>
          <p class={styles["title"]}>{title}</p>
        </div>
        <Divider color="#fff"></Divider>
        <div class={styles["eng-title-container"]}>
          <p class={styles["eng-title"]}>{engTitle}</p>
        </div>
        <div class={styles["content-container"]}>
          <p class={styles["content"]}>{content}</p>
        </div>
      </article>
    );
  },
);
