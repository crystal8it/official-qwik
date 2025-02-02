import { Slot, component$ } from "@builder.io/qwik";

type Props = {
  show?: boolean;
  transition?: string;
};

export default component$(
  ({ show = false, transition = "all .3s ease-in" }: Props) => {
    return (
      <>
        <div
          style={{
            position: "absolute",
            visibility: show ? "visible" : "hidden",
            transition: transition,
          }}
        >
          <Slot />
        </div>
      </>
    );
  },
);
