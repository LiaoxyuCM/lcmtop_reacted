import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export function NavBar({ advanced = false }: { advanced?: boolean }) {
  const { t, i18n } = useTranslation();

  let NavBarBase = () => (
    <>
      <a href="/">LiaoxyuCM</a>
      <div className="pc">
        <a href="#" onClick={
          (e) => {
            e.preventDefault();
            if (i18n.language === 'zh-CN') {
              i18n.changeLanguage('en');
            } else {
              i18n.changeLanguage('zh-CN');
            }
          }
        }>{t("translate.anotherlang")}</a>
        <a href="https://github.com/LiaoxyuCM" target="_blank">GitHub</a>
        <a href="/friendlylinks">{t("index.nav.frdlylnks")}</a>
      </div>
    </>
  )
  if (advanced) {
    const [isUnscrolled, setIsUnscrolled] = useState<boolean>(true);

    useEffect(() => {
      const handleScroll = () => {
        setIsUnscrolled(window.scrollY < 21);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
      <nav className={(isUnscrolled) ? 'unscrolled' : ''} style={{ position: "fixed" }}>
        <NavBarBase />
      </nav>
    );
  } else {
    return (
      <nav>
        <NavBarBase />
      </nav>
    )
  }
}

export function FooterBase({advanced = false}: {advanced?: boolean}) {
  if (!advanced) {
    return (
      <p>&copy; LiaoxyuCM/Lclimir × LcmTech 2024-2026</p>
    )
  };

  let siteTimer = useRef<HTMLParagraphElement>(null);
  let { t } = useTranslation();
  let timerContentTemplate: string = t("index.timer");
  useEffect(() => {
    const startTime: number = new Date('2026/01/04 22:25:00').getTime();
    function fmtDuration(ms: number): string{
      const day: number = Math.floor(ms/86400000);
      const hour: number = Math.floor(ms%86400000/3600000);
      const min: number = Math.floor(ms%3600000/60000);
      const sec: number = Math.floor(ms%60000/1000);
      return timerContentTemplate
        .replace(/%d/g, day.toString())
        .replace(/%h/g, hour.toString())
        .replace(/%m/g, min.toString())
        .replace(/%s/g, sec.toString());
    }
    function update(){
      if (siteTimer.current) {
        siteTimer.current!.textContent = fmtDuration(Date.now() - startTime);
      }
    }

    update();
    const interval: number = setInterval(update, 100);

    return () => clearInterval(interval);
  }, [timerContentTemplate]);

  return (
    <>
      <FooterBase />
      <p ref={siteTimer}></p>
    </>
  )
}