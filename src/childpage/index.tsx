import { NavBar, FooterBase, Cursor } from './modules/template_components';
import { useTranslation } from 'react-i18next';
import { showToast, ToastOnclickAction, ToastType } from './modules/toast';
import { Icons } from './modules/components';
import LoadingPage from './modules/loadingpage';
import { useState, useEffect } from 'react';
import './modules/css/homepage.scss';

const VERSION = "0.8.0-pre.1";

function Homepage() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState<boolean>(true);
  const [bgLoaded, setBgLoaded] = useState<boolean>(false);
  const [i18nReady, setI18nReady] = useState<boolean>(false);

  let greet: string = "";
  switch (new Date().getHours()) {
    case 0: case 1: case 2: case 3: case 4: case 5:
      greet = "late_night";
      break
    case 6: case 7: case 8:
      greet = "morning";
      break;
    case 9: case 10:
      greet = "forenoon";
      break;
    case 11: case 12:
      greet = "noon";
      break;
    case 13: case 14: case 15:
      greet = "afternoon_early";
      break;
    case 16: case 17: case 18:
      greet = "afternoon";
      break;
    case 19: case 20: case 21:
      greet = "evening";
      break;
    case 22: case 23:
      greet = "night";
      break;
  }

  useEffect(() => {
    if (i18n.isInitialized) {
      setI18nReady(true);
    }
  }, [i18n]);

  useEffect(() => {
    if (bgLoaded && i18nReady) {
      const timer = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [bgLoaded, i18nReady]);

  useEffect(() => {
    if (!loading && localStorage.getItem("version") !== VERSION) {
      localStorage.setItem("version", VERSION);
      showToast.nohook(
        t("index.version.update").replace(/%ver/g, VERSION),
        {
          onClick: ToastOnclickAction.Redirect2Url("https://github.com/LiaoxyuCM/liaoxyucmTop_reacted/releases/latest"),
          duration: 5000
        }
      );
    }
  }, [loading, t]);

  useEffect(() => {
    if (!loading) {
      showToast.nohook(t("index.greeting." + greet));
    }
  }, [loading, greet]);

  return (
    <>
      <LoadingPage
        isLoading={loading}
      />
      <img
        className="homepage back-img"
        style={{ opacity: bgLoaded ? 1 : 0 }}
        src="https://assets.liaoxyucm.top/wallpaper.jpg"
        onLoad={() => setBgLoaded(true)}
        onError={() => {
          setBgLoaded(true);
          showToast.nohook(t("index.bg_load_failed"), { type: ToastType.Error });
        }}
      />
      {!loading && (
        <>
          <Cursor />
          <NavBar advanced={true} />
          <div className="homepage overlay">
            <h1 className="cur-target">{t("index.welcome")}</h1>
            <p className="homepage subtitle">
              /* LiaoxyuCM, Lclimir */
            </p>
            <Icons.Scrolldown />
          </div>
          <div className="homepage main-parent">
            <main>
              <p>
                {t("index.comingup")}
                <a
                  href="content/"
                  style={{fontWeight: "bold"}}
                >
                  {t("index.comingup.here")}
                </a>
                <br />
                {t("index.comingup.missing_smooth_transition")}
                <code>#smooth-transition</code>
              </p>
            </main>
            <footer style={{ margin: 0 }}>
              <FooterBase advanced={true} />
            </footer>
          </div>
        </>
      )}
    </>
  )
}

export default Homepage
