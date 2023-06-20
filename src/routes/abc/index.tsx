import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>ABC</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: 'CRYSTAL BIT. | ABC',
  meta: [
    {
      name: 'description',
      content: 'CRYSTAL BIT. 網頁設計, 系統設計, UI/UX 規劃 ',
    },
  ],
};
