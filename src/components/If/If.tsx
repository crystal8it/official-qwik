import { component$, Slot } from "@builder.io/qwik";

export default component$(({ condition }: { condition: boolean }) => {
  return condition ? <Slot></Slot> : null;
});
