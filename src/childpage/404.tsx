import { useTranslation } from "react-i18next";

function FourZeroFour() {
  const { t } = useTranslation();
  return (
    <div className="404err">
      <h1>404</h1>
      <div className="hint error">
        <p>{t("err.404.message")}</p>
      </div>
      <br />
      <a href="/"><button>{t("err.404.goback")}</button></a>
    </div>
  );
}
export default FourZeroFour
