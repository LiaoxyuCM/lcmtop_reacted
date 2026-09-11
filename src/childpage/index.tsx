import { NavBar, FooterBaseAdvanced, Cursor } from './modules/template_components';
import { CodeField, Card } from './modules/components';
import { useTranslation } from 'react-i18next';
import { showToast, ToastOnclickAction, ToastType } from './modules/toast';
import Icons from './modules/icons';
import LoadingPage from './modules/loadingpage';
import { useState, useEffect, type JSX } from 'react';
import './modules/css/homepage.scss';
import { version } from "../../package.json";

function Homepage() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState<boolean>(true);
  const [bgLoaded, setBgLoaded] = useState<boolean>(false);

  const timeRanges: {max: number, value: string}[] = [
    { max: 5, value: 'late_night' },
    { max: 8, value: 'morning' },
    { max: 10, value: 'forenoon' },
    { max: 12, value: 'noon' },
    { max: 15, value: 'afternoon_early' },
    { max: 18, value: 'afternoon' },
    { max: 21, value: 'evening' },
    { max: 23, value: 'night' }
  ];

  const greet: string = timeRanges.find(range => (new Date().getHours()) <= range.max)?.value || '';

  useEffect(() => {
    if (bgLoaded && i18n.isInitialized) {
      const timer = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [bgLoaded, i18n.isInitialized]);

  useEffect(() => {
    if (!loading && localStorage.getItem("version") !== version) {
      localStorage.setItem("version", version);
      showToast.nohook(
        t("index.version.update", {ver: version}),
        {
          onClick: ToastOnclickAction.Redirect2Url("https://github.com/LiaoxyuCM/lcmtop_reacted/releases/latest"),
          duration: 5000
        }
      );
    }
  }, [loading, t]);

  useEffect(() => {
    if (!loading) {
      showToast.nohook(t("index.greeting." + greet));
    }
  }, [loading, greet, t]);

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
              {
                [
                  {
                    name: "comingup",
                    el: <>
                    <p>
                      {t("index.comingup.main")}
                      <a
                        href="content/"
                        style={{fontWeight: "bold"}}
                      >
                        {t("index.comingup.here")}
                      </a>
                      <br />
                      {t("index.comingup.smooth_transition")}
                    </p>

                    <CodeField code="#smooth-transition" />
                    </>
                  },
                  {
                    name: "about",
                    el: <p>
                      {t("index.about.p1")}
                      <br />{t("index.about.p2")}
                    </p>
                  },
                  {
                    name: "portfolio",
                    el: <>
                      <h3>{t("index.portfolio")}</h3>
                      <div className="cards">
                        <Card
                          title="lcmtop_reacted"
                          content="Lorem ipsum dolor sit amet."
                          link="#"
                        />
                      </div>
                    </>
                  },
                  {
                    name: "contact",
                    el: <>
                      <h3>{t("index.contact")}</h3>
                      <ul>
                        <li><a href="mailto:me@liaoxyucm.top">me@liaoxyucm.top</a></li>
                        <li><a href="https://github.com/LiaoxyuCM">GitHub</a></li>
                      </ul>
                    </>
                  }
                ].map(({name, el}: {name: string, el: JSX.Element}, index: number) => (
                  <div className={ `homepage article ${name}` } key={index}>
                    { el }
                  </div>
                ))
              }
            </main>
            <footer style={{ margin: 0 }}>
              <FooterBaseAdvanced />
            </footer>
          </div>
        </>
      )}
    </>
  )
}

export default Homepage
