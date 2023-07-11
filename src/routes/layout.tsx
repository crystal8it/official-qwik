import { component$, Slot } from '@builder.io/qwik';
import GlobalStore from '~/store/globalStore';
import Header from '~/components/layouts/header/header';
import Footer from '~/components/layouts/footer/footer';

export default component$(() => {
  return (
    <>
      <GlobalStore>
        <Header />
        <main>
          <Slot />
        </main>
        <Footer />
      </GlobalStore>
    </>
  );
});
