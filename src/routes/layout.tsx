import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import Header from '~/components/layouts/header/header';
import Footer from '~/components/layouts/footer/footer';
import Background from '~/components/layouts/background/background';
import styles from './styles.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <Header />
      <main>
        <Background></Background>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
