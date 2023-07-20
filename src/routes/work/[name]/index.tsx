import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

export const useWorks = routeLoader$(async (requestEvent) => {
  const name = requestEvent.params.name;

  return { title: name, text: name };
});

export default component$(() => {
  const signal = useWorks();

  return <h2>我是{signal.value.title}</h2>;
});

export const head: DocumentHead = ({ resolveValue, params }) => {
  const work = resolveValue(useWorks);
  return {
    title: `CRYSTAL BIT. | 合作案例 - ${work.title}`,
    meta: [
      {
        name: 'description',
        content: work.text,
      },
      {
        name: 'id',
        content: params.jokeId,
      },
    ],
  };
};
