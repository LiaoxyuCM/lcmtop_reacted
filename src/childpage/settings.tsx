import { useTranslation } from "react-i18next";
import { SelectBar } from "./modules/components.tsx";
import config from "../../LCMTOP_CONFIG.json";

let LANGS = [
  "en",
  "zh-CN",
  "zh-TW"
];

let LANGDISP = [
  "English",
  "简体中文",
  "繁體中文"
];

if (config.i18n.support_additional_lang) {
  LANGS.push(
    "ja",
    "ko",
    "fr",
    "de",
    "es",
    "ru"
  );
  LANGDISP.push(
    "日本語 (AI 生成 - 同期更新なし)",
    "한국어 (AI 생성, 동기화 미보장)",
    "Français (traduit par IA, non synchronisé)",
    "Deutsch (KI-generiert, nicht synchronisiert)",
    "Español (generado por IA, sin sincronización)",
    "Русский (сгенерировано ИИ, без синхронизации)"
  );
}

export default function Settings() {
  const { t, i18n } = useTranslation();

  const langSelectedIdx = Math.max(0, LANGS.indexOf(i18n.language));

  return (
    <>
      <h2>{t("settings.language")}</h2>
      <SelectBar
        choices={LANGDISP}
        selectedIdx={langSelectedIdx}
        onChange={(idx: number) => i18n.changeLanguage(LANGS[idx])}
      />
      <h2>{t("settings.cursor_smooth_transition")}</h2>
      <SelectBar
        choices={[
          t("global.yes"),
          t("global.no"),
        ]}
        selectedIdx={localStorage.getItem("cursor_smooth_transition") == "yes" ? 0 : 1}
        onChange={(i: number) => {localStorage.setItem("cursor_smooth_transition", i == 0 ? "yes" : "no")}}
      />
    </>
  );
}
