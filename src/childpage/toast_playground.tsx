import { showToast } from "./modules/toast";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export default function ToastPlayground() {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
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
  )
}
