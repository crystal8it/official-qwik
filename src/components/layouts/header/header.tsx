import {
  $,
  component$,
  useSignal,
  createContextId,
  useContextProvider,
  useContext,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import CrystalBitLogo from '~/components/icons/crystalbit';
import Burger from '~/components/icons/burger';
import Menu from '~/components/layouts/menu/menu';
import Transition from '~/components/Transition/transition';
import styles from './header.module.css';
import { headerActiveContext } from '~/store/globalStore';

type menu = boolean;

export const menuInactiveContext = createContextId<any>('docs.menuInactive');

export default component$(() => {
  const menu = useSignal<menu>(false);

  const menuActive = $(() => (menu.value = true));
  const menuInactive = $(() => (menu.value = false));
  useContextProvider(menuInactiveContext, menuInactive);

  const headerActive = useContext(headerActiveContext);

  return (
    <header
      class={[
        styles.header,
        styles.wrapper,
        headerActive.value ? styles.active : '',
        'trans-3',
      ]}
    >
      <div class={styles.logo}>
        <Link href="/" title="qwik">
          <CrystalBitLogo height={54} width={200} fill={'white'} />
        </Link>
      </div>

      <div tabIndex={0} class={styles.burger} onPointerDown$={menuActive}>
        <Burger></Burger>
      </div>
      <Transition show={menu.value}>
        <Menu
          active={menu.value}
          animationClass={['fade-in-right', menu.value ? 'show' : '']}
        ></Menu>
      </Transition>
    </header>
  );
});
