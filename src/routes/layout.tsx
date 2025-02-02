import { component$, Slot } from "@builder.io/qwik";
import GlobalStore from "~/store/globalStore";
import Header from "~/components/layouts/header/header";
import Footer from "~/components/layouts/footer/footer";
import type { DocumentHead } from "@builder.io/qwik-city";

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

export const head: DocumentHead = ({ head }) => {
  return {
    title: `CRYSTAL BIT. 網頁設計 | ${head.title}`,
  };
};
