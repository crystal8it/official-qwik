import {
  useSignal,
  useStore,
  component$,
  Slot,
  $,
  createContextId,
  useContextProvider,
} from "@builder.io/qwik";

export const headerActiveContext = createContextId<any>("docs.headerActive");
export const headerHandlerContext = createContextId<any>(
  "handler.headerHandler",
);

export default component$(() => {
  const headerActive = useSignal<boolean>(false);
  const headerHandler = useStore({
    active: $(() => (headerActive.value = true)),
    inactive: $(() => (headerActive.value = false)),
  });
  useContextProvider(headerActiveContext, headerActive);
  useContextProvider(headerHandlerContext, headerHandler);

  return <Slot></Slot>;
});
