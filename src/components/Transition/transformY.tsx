import { useSignal, component$, useVisibleTask$, Slot } from "@builder.io/qwik";

type transformYProps = {
  index: number;
  style?: { [key: string]: string };
  myClass?: string[];
};

export default component$(
  ({ index, myClass = [], style = {} }: transformYProps) => {
    const isShow = useSignal(false);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ cleanup }) => {
      isShow.value = true;
      cleanup(() => (isShow.value = false));
    });

    return (
      <article
        style={{ ...style }}
        class={[`hidden-${index + 1}`, isShow.value ? "show" : "", ...myClass]}
      >
        <Slot></Slot>
      </article>
    );
  },
);
