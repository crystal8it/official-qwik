import { useSignal, component$, useVisibleTask$, Slot } from '@builder.io/qwik';

type transformYProps = {
  index: number;
};

export default component$(({ index }: transformYProps) => {
  const isShow = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    isShow.value = true;
    cleanup(() => (isShow.value = false));
  });

  return (
    <article class={[`hidden-${index + 1}`, isShow.value ? 'show' : '']}>
      <Slot></Slot>
    </article>
  );
});
