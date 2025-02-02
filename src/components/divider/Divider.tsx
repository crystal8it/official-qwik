import { component$ } from "@builder.io/qwik";
import styles from "./Divivder.module.css";
import If from "../If/If";

type dividerProps = {
  type?: "horizontal" | "verticle";
  color?: string;
  width?: string;
  links?: string[];
  active?: string;
};

export default component$(
  ({
    type = "horizontal",
    color = "#ccc",
    width = "1px",
    links = [],
    active = "#hero",
  }: dividerProps) => {
    return (
      <>
        <If condition={type === "horizontal"}>
          <div
            class={styles.horizontal}
            style={{
              height: width,
              backgroundColor: color,
            }}
          ></div>
        </If>

        <If condition={type === "verticle"}>
          <div
            class={styles.verticle}
            style={{
              width: width,
              backgroundColor: color,
            }}
          >
            <If condition={links.length > 0}>
              <div class={styles["items-container"]}>
                {links.map((link) => (
                  <a
                    class={[styles.item, active === link ? styles.active : ""]}
                    key={link}
                    href={link}
                  ></a>
                ))}
              </div>
            </If>
          </div>
        </If>
      </>
    );
  },
);
