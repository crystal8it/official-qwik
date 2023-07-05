import { component$, useContext } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { menuInactiveContext } from '~/components/layouts/header/header';
import Line from '~/components/icons/line';
import Facebook from '~/components/icons/facebook';
import Telegram from '~/components/icons/telegram';
import Close from '~/components/icons/close';
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

  return (
    <nav class={[styles.menu, active ? styles.active : '', ...animationClass]}>
      <div class={styles.close} tabIndex={0} onPointerDown$={menuInactive}>
        <Close></Close>
      </div>

      {links.map(({ href, content }) => (
        <Link key={content} href={href}>
          {content}
        </Link>
      ))}

      <div class={styles.menu_icon}>
        <Line></Line>
        <Facebook></Facebook>
        <Telegram></Telegram>
      </div>
    </nav>
  );
});
