import { component$, useContext } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { menuInactiveContext } from "~/components/layouts/header/header";
import Line from "~/components/icons/line";
import Facebook from "~/components/icons/facebook";
import Telegram from "~/components/icons/telegram";
import Close from "~/components/icons/close";
import styles from "./menu.module.css";

type Props = {
  active: boolean;
  animationClass: string[];
};

const links = [
  { href: "/works", content: "Works" },
  // { href: '', content: 'Article' },
];

export default component$(({ active, animationClass }: Props) => {
  const nav = useNavigate();
  const menuInactive = useContext(menuInactiveContext);

  return (
    <nav class={[styles.menu, active ? styles.active : "", ...animationClass]}>
      <div class={styles.close} tabIndex={0} onPointerDown$={menuInactive}>
        <Close></Close>
      </div>

      {links.map(({ href, content }) => (
        <a
          style="cursor: pointer;"
          preventdefault:click
          onPointerDown$={() => {
            menuInactive();
            nav(href);
          }}
          key={content}
        >
          {content}
        </a>
      ))}

      {/* <a href="#contact" onPointerDown$={menuInactive}>
        Contact
      </a> */}

      <div class={styles.menu_icon}>
        <Line></Line>
        <Facebook></Facebook>
        <Telegram></Telegram>
      </div>
    </nav>
  );
});
