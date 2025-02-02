import { component$, useStore, $ } from "@builder.io/qwik";
import styles from "./contact.module.css";
import TransformY from "../Transition/transformY";
import RegularBtn from "../button/RegularBtn";
import sendEmail from "~/utils/email";

type ContactForm = {
  name: string;
  phone: string;
  email: string;
  company: string;
  demand: { value: string[]; items: string[] };
  comment: string;
};

type ContactProps = {
  active?: boolean;
  showSlogan?: boolean;
  zIndex?: number;
};

export default component$(
  ({ active = true, showSlogan = true, zIndex = -2 }: ContactProps) => {
    const formData = useStore<ContactForm>({
      name: "",
      phone: "",
      email: "",
      company: "",
      demand: {
        value: [],
        items: ["網頁設計", "App設計", "ERP設計", "UI/UX設計", "其它"],
      },
      comment: "",
    });

    const resetFormData = $(() => {
      formData.name = "";
      formData.phone = "";
      formData.email = "";
      formData.company = "";
      formData.demand = {
        value: [],
        items: ["網頁設計", "App設計", "ERP設計", "UI/UX設計", "其它"],
      };
      formData.comment = "";
    });

    const sendEmailHandler = $(async () => {
      if (formData.name === "" || formData.phone === "") {
        window.alert("請輸入姓名與電話");

        return;
      }

      const res = await sendEmail(
        formData.name,
        formData.phone,
        formData.email,
        formData.company,
        formData.demand.value.join(","),
        formData.comment,
      );

      if (res === true) {
        window.alert("訊息已成功寄出,我們會盡快與您聯繫,謝謝!");
        resetFormData();
      } else {
        window.alert("訊息發送失敗,請稍後再嘗試!");
      }
    });

    return (
      <section
        id="contact"
        class={[styles.contact]}
        style={{
          position: active ? "sticky" : "relative",
          bottom: "0px",
          height: "100%",
          zIndex: zIndex,
        }}
      >
        <article
          class={[styles.slogan, styles["contact-padding"]]}
          style={{
            visibility: showSlogan ? "visible" : "hidden",
            opacity: showSlogan ? "1" : "0",
            height: "100%",
          }}
        >
          <div class={[styles["slogan-box"], styles["contact-section"]]}>
            <h2
              class={[
                styles["slogan-text"],
                "font-zen-maru",
                "letter-spacing-2",
              ]}
            >
              CONTACT
            </h2>
            <h2 class={[styles["slogan-text-sm"], "letter-spacing-2"]}>
              聯絡我們
            </h2>
          </div>

          <TransformY index={0}>
            <div
              class={[styles["contact-container"], styles["contact-section"]]}
            >
              <form>
                {/* input */}
                <div>
                  <label>
                    <p>姓名</p>
                    <input
                      onInput$={(event) => {
                        formData.name = (
                          event.target as HTMLInputElement
                        ).value;
                      }}
                      class={styles["custom-input"]}
                      value={formData.name}
                      type="text"
                    />
                  </label>
                  <label>
                    <p>聯絡電話</p>
                    <input
                      onInput$={(event) => {
                        formData.phone = (
                          event.target as HTMLInputElement
                        ).value;
                      }}
                      value={formData.phone}
                      class={styles["custom-input"]}
                      type="text"
                    />
                  </label>

                  <label>
                    <p>聯絡信箱</p>
                    <input
                      onInput$={(event) => {
                        formData.email = (
                          event.target as HTMLInputElement
                        ).value;
                      }}
                      value={formData.email}
                      class={styles["custom-input"]}
                      type="text"
                    />
                  </label>

                  <label>
                    <p>公司名稱</p>
                    <input
                      onInput$={(event) => {
                        formData.company = (
                          event.target as HTMLInputElement
                        ).value;
                      }}
                      value={formData.company}
                      class={styles["custom-input"]}
                      type="text"
                    />
                  </label>
                  {/* checkbox */}

                  <div class={styles["div-label"]}>
                    <p>需求</p>

                    <div class={styles["checkbox-container"]}>
                      {formData.demand.items.map((content) => (
                        <label key={content} class="customer-check-box">
                          <input
                            onInput$={(event) => {
                              if ((event.target as HTMLInputElement).checked) {
                                formData.demand.value = [
                                  ...formData.demand.value,
                                  content,
                                ];
                              } else {
                                formData.demand.value = [
                                  ...formData.demand.value.filter(
                                    (item) => item !== content,
                                  ),
                                ];
                              }
                            }}
                            checked={formData.demand.value.includes(content)}
                            type="checkbox"
                          />
                          <span class="checkmark"></span>
                          <p>{content}</p>
                        </label>
                      ))}
                    </div>
                  </div>

                  <label>
                    <p>備註</p>
                    <textarea
                      onInput$={(event) => {
                        formData.comment = (
                          event.target as HTMLInputElement
                        ).value;
                      }}
                      value={formData.comment}
                      style=" height:100px"
                      class={styles["custom-input"]}
                    ></textarea>
                  </label>
                </div>

                {/* button */}
                <div>
                  <RegularBtn event={sendEmailHandler} size="lg">
                    送出
                  </RegularBtn>
                </div>
              </form>
            </div>
          </TransformY>
        </article>
      </section>
    );
  },
);
