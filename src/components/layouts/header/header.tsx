import {
  component$,
  useSignal,
  $,
  createContextId,
  useContextProvider,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuAlignJustify } from '@qwikest/icons/lucide';
import CrystalBitLogo from '~/components/icons/crystalbit';
import Menu from '~/components/layouts/menu/menu';
import Transition from '~/components/Transition/transition';
import styles from './header.module.css';

type menu = boolean;

export const menuInactiveContext = createContextId<any>('docs.menuInactive');

export default component$(() => {
  const menu = useSignal<menu>(false);

  const menuActive = $(() => (menu.value = true));
  const menuInactive = $(() => (menu.value = false));
  useContextProvider(menuInactiveContext, menuInactive);

  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <Link href="/" title="qwik">
            <CrystalBitLogo height={54} width={200} fill={'white'} />
          </Link>
        </div>

        <div tabIndex={0} class={styles.burger} onPointerDown$={menuActive}>
          <LuAlignJustify></LuAlignJustify>
        </div>
        <Transition show={menu.value}>
          <Menu
            active={menu.value}
            animationClass={['fade-in-right', menu.value ? 'show' : '']}
          ></Menu>
        </Transition>
      </div>
    </header>
  );
});
