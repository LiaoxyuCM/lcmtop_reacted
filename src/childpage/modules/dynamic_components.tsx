import { useEffect, useState } from "react";
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
