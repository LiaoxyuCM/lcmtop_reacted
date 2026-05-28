import { showToast, ToastOnclickAction, ToastType } from "./modules/toast";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export default function ToastPlayground() {
  const { t } = useTranslation();
  const selectRef = useRef<HTMLSelectElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <h3>{t("global.global")}</h3>
      <div style={{ display: "flex" }}>
        <select name="type" ref={selectRef} style={{
          borderRadius: 0,
          borderTopLeftRadius: '8px',
        }}>
          {["normal", "error", "warn", "success", "info", "debug"].map((value) => (
            <option key={value} value={value}>{t(`teststyle.lvl.${value}`)}</option>
          ))}
        </select>
        <input ref={durationRef} name="duration" type="number" style={{
          flex: "1",
          borderRadius: 0,
          borderTopRightRadius: '8px',
        }} placeholder={t("teststyle.toast.input.duration")} />
      </div>
      <input ref={inputRef} name="content" style={{
        width: "100%",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      }} type="text" placeholder={t("teststyle.toast.input")} />

      <h3>onclick=remove</h3>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            const durationValue = durationRef.current?.value;
            showToast.nohook(
              inputRef.current?.value || t("teststyle.toast.default"),
              new ToastOnclickAction.RemoveToast(),
              selectRef.current?.value as ToastType,
              durationValue ? Number(durationValue) : 2000
            )
          }}
          style={{
            flex: 1
          }}
        >
          {t("global.submit")}
        </button>
      </div>

      <h3>onclick=redirect</h3>
      <div style={{ display: "flex" }}>
        <input ref={urlInputRef} style={{
          flex: "1 1 0%",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }} type="text" placeholder={t("teststyle.toast.onclick_redirect.input") + "https://liaoxyucm.top"} name="toast_url_input" />
        <button
          onClick={() => {
            const durationValue = durationRef.current?.value;
            showToast.nohook(
              inputRef.current?.value || t("teststyle.toast.default"),
              new ToastOnclickAction.Redirect2Url(urlInputRef.current?.value || "https://liaoxyucm.top"),
              selectRef.current?.value as ToastType,
              durationValue ? Number(durationValue) : 2000
            )
          }}
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          {t("global.submit")}
        </button>
      </div>
    </>
  )
}
