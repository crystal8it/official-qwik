import { component$, useContext } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuX } from '@qwikest/icons/lucide';
import { menuInactiveContext } from '~/components/layouts/header/header';
import Line from '~/components/icons/line';
import Facebook from '~/components/icons/facebook';
import Telegram from '~/components/icons/telegram';
import styles from './menu.module.css';

type Props = {
  active: boolean;
  animationClass: string[];
};

const links = [
  { href: '', content: 'About' },
  { href: '', content: 'Article' },
  { href: '', content: 'Works' },
  { href: '', content: 'Contact' },
];

export default component$(({ active, animationClass }: Props) => {
  const menuInactive = useContext(menuInactiveContext);

  const menuLinksRender = links.map(({ href, content }) => (
    <Link key={content} href={href}>
      {content}
    </Link>
  ));

  return (
    <div class={[styles.menu, active ? styles.active : '', ...animationClass]}>
      <div class={styles.close} tabIndex={0} onPointerDown$={menuInactive}>
        <LuX></LuX>
      </div>

      {menuLinksRender}

      <div class={styles.menu_icon}>
        <Line></Line>
        <Facebook></Facebook>
        <Telegram></Telegram>
      </div>
    </div>
  );
});
