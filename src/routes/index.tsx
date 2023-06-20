import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Wheel from '~/components/ScrollDown/Wheel';

export default component$(() => {
  return (
    <>
      <section style={{ height: 'calc(100vh - 115px)', position: 'relative' }}>
        <Wheel></Wheel>
      </section>
      <section style={{ height: '100vh' }}></section>
      <section style={{ height: '100vh' }}></section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'CRYSTAL BIT. | 首頁',
  meta: [
    {
      name: 'description',
      content: 'CRYSTAL BIT. 網頁設計, 系統設計, UI/UX 規劃 ',
    },
  ],
};
