import { component$, Slot, useVisibleTask$, useSignal } from "@builder.io/qwik";
import styles from "./Btn.module.css";

export default component$(() => {
  const isShow = useSignal<boolean>(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    isShow.value = true;

    cleanup(() => (isShow.value = false));
  });

  return (
    <button
      class={[[styles.btn], "trans-3"]}
      style={{ padding: `10px ${isShow.value ? "100px" : "20px"}` }}
    >
      <Slot></Slot>
      <div
        class={[styles.bubble, styles["bubble-after"], "trans-3"]}
        style={{
          zIndex: isShow.value ? "0" : "-1",
          visibility: isShow.value ? "visible" : "hidden",
          opacity: isShow.value ? "1" : "0",
        }}
      >
        <div
          class={[styles["rounded-3"], "trans-3"]}
          style={{ transform: `translateX(${isShow.value ? "0" : "-65px"})` }}
        ></div>
        <div
          class={[styles["rounded-2"], "trans-3"]}
          style={{ transform: `translateX(${isShow.value ? "0" : "-90px"})` }}
        ></div>
        <div
          class={[styles["rounded-1"], "trans-3"]}
          style={{ transform: `translateX(${isShow.value ? "0" : "-110px"})` }}
        ></div>
      </div>

      <div
        class={[styles.bubble, styles["bubble-before"]]}
        style={{
          zIndex: isShow.value ? "0" : "-1",
          visibility: isShow.value ? "visible" : "hidden",
          opacity: isShow.value ? "1" : "0",
        }}
      >
        <div
          class={[styles["rounded-1"], "trans-3"]}
          style={{ transform: `translateX(${isShow.value ? "0" : "65px"})` }}
        ></div>
        <div
          class={[styles["rounded-2"], "trans-3"]}
          style={{ transform: `translateX(${isShow.value ? "0" : "90px"})` }}
        ></div>
        <div
          class={[styles["rounded-3"], "trans-3"]}
          style={{ transform: `translateX(${isShow.value ? "0" : "110px"})` }}
        ></div>
      </div>
    </button>
  );
});
