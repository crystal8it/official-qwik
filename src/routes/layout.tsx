import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/layouts/header/header';
import Footer from '~/components/layouts/footer/footer';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
