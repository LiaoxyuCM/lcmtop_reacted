import { showToast, ToastOnclickAction } from "./modules/toast";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export default function ToastPlayground() {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <h3>onclick=remove</h3>
      <div style={{ display: "flex" }}>
        <input ref={inputRef} style={{
          flex: "1 1 0%",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }} type="text" placeholder={t("teststyle.toast.input")} name="toast_content_input" />
        <button
          onClick={() => showToast.nohook(inputRef.current?.value || t("teststyle.toast.default"))}
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
        >
          {t("global.submit")}
        </button>
      </div>

      <h3>onclick=redirect</h3>
      <input ref={inputRef2} style={{
        width: "100%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }} type="text" placeholder={t("teststyle.toast.input")} name="toast_url_input" />
      <div style={{ display: "flex" }}>
        <input ref={urlInputRef} style={{
          flex: "1 1 0%",
          borderRadius: 0,
          borderBottomLeftRadius: "8px",
        }} type="text" placeholder={t("teststyle.toast.onclick_redirect.input") + "https://liaoxyucm.top"} name="toast_url_input" />
        <button
          onClick={() => {
            showToast.nohook(inputRef2.current?.value || t("teststyle.toast.default"),
              new ToastOnclickAction.Redirect2Url(urlInputRef.current?.value || "https://liaoxyucm.top"))
          }}
          style={{
            borderRadius: 0,
            borderBottomRightRadius: "8px",
          }}
        >
          {t("global.submit")}
        </button>
      </div>
    </>
  )
}
