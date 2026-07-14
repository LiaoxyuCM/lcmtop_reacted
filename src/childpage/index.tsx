import { NavBar, FooterBaseAdvanced, Cursor } from './modules/template_components';
import { useTranslation } from 'react-i18next';
import { showToast, ToastOnclickAction, ToastType } from './modules/toast';
import { motion, AnimatePresence } from 'motion/react';
import Icons from './modules/icons';
import LoadingPage from './modules/loadingpage';
import { useState, useEffect, type JSX } from 'react';
import './modules/css/homepage.scss';

const VERSION = "0.8.0-pre.4";

function Homepage() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState<boolean>(true);
  const [bgLoaded, setBgLoaded] = useState<boolean>(false);
  const [mynindex, sMynIndex] = useState(0);

  const myn: string[] = ["iaoxyuCM", "climir", "vqichongNB"];

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
    if (bgLoaded && i18n.isInitialized) {
      const timer = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [bgLoaded, i18n.isInitialized]);

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
  }, [loading, greet, t]);

  useEffect(() => {
    const timer = setInterval(() => {
      sMynIndex((prev) => (prev + 1) % myn.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [myn.length]);

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
                    el: <p>
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
                  },
                  {
                    name: "about",
                    el: <p style={{ position: "relative" }}>
                          L
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={myn[mynindex]}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{
                                duration: .6,
                                ease: [0.25, 0.1, 0.25, 1],
                              }}
                              style={{ position: "absolute" }}
                            >
                              {myn[mynindex]}
                            </motion.span>
                          </AnimatePresence>
                        </p>
                  },
                  {
                    name: "portfolio",
                    el: <>
                      <p>portfolio</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin imperdiet consectetur. Nam eu egestas ipsum, eget faucibus tellus. In consectetur dapibus ultricies. In bibendum condimentum purus, vel venenatis urna vestibulum vitae. Vivamus et tortor cursus, fermentum libero sit amet, luctus felis. Nunc eleifend ultrices ligula, ut gravida elit interdum nec. Ut eu justo id turpis gravida tristique nec nec risus.</p>
                    </>
                  },
                  {
                    name: "contact",
                    el: <>
                      <p>contact</p>
                      <p>me@liaoxyucm.top</p>
                    </>
                  }
                ].map(({name, el}: {name: string, el: JSX.Element}, index: number) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      transform: "translateY(10px)"
                    }}
                    whileInView={{
                      opacity: 1,
                      transform: "translateY(0)"
                    }}
                    key={ index }
                    className={ `homepage article ${name}` }
                  >
                    { el }
                  </motion.div>
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
