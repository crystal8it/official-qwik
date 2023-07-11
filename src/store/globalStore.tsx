import {
  useSignal,
  component$,
  Slot,
  createContextId,
  useContextProvider,
} from '@builder.io/qwik';

export const headerActiveContext = createContextId<any>('docs.headerActive');

export default component$(() => {
  const headerActive = useSignal<boolean>(false);

  useContextProvider(headerActiveContext, headerActive.value);

  return <Slot></Slot>;
});
