import { component$, Slot } from '@builder.io/qwik';
import styles from './SideBar.module.css';

import Facebook from '../icons/facebook';
import Line from '../icons/line';
import Telegram from '../icons/telegram';

type sideBarProps = {
  style?: any;
};

export default component$(({ style }: sideBarProps) => {
  return (
    <nav style={...style} class={styles.sidebar}>
      <Slot></Slot>

      <Line></Line>
      <Facebook></Facebook>
      <Telegram></Telegram>
    </nav>
  );
});
