import { NavBar, FooterBaseAdvanced, Cursor } from './modules/template_components';
import { useTranslation } from 'react-i18next';
import { showToast, ToastOnclickAction, ToastType } from './modules/toast';
import Icons from './modules/icons';
import LoadingPage from './modules/loadingpage';
import { useState, useEffect } from 'react';
import './modules/css/homepage.scss';

const VERSION = "0.8.0-pre.3";

function Homepage() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState<boolean>(true);
  const [bgLoaded, setBgLoaded] = useState<boolean>(false);

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
              <div className="homepage article about">
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
              </div>
              <div className="homepage article portfolio">
                <p>portfolio</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin imperdiet consectetur. Nam eu egestas ipsum, eget faucibus tellus. In consectetur dapibus ultricies. In bibendum condimentum purus, vel venenatis urna vestibulum vitae. Vivamus et tortor cursus, fermentum libero sit amet, luctus felis. Nunc eleifend ultrices ligula, ut gravida elit interdum nec. Ut eu justo id turpis gravida tristique nec nec risus.</p>
              </div>
              <div className="homepage article contact">
                <p>contact</p>
                <p>Cras enim purus, bibendum id euismod id, ornare vitae turpis. Curabitur eu ultrices enim. Proin pretium condimentum sapien sed suscipit. Maecenas non massa et nisl egestas vestibulum. Donec volutpat feugiat urna eu lobortis. Maecenas finibus quam in mauris tempus, et malesuada felis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula augue. Nunc quis ipsum tellus. Fusce efficitur eros dapibus enim imperdiet, et pellentesque mauris ultricies.</p>
              </div>
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
