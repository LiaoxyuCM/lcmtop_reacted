import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "./components";

export function NavBar({ advanced = false }: { advanced?: boolean }) {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // read color theme (light / dark) from localStorage and set it to the root element
  const [darkmode, setDarkmode] = useState<boolean>(
    Boolean(localStorage.getItem("darkmode") === "true")
  );

  useEffect(() => { // 直接操作dom啊，有意思
    const mainElement = document.querySelector('body');
    if (mainElement) {
      if (darkmode) {
        mainElement.classList.add('dark');
      } else {
        mainElement.classList.remove('dark');
      }
    }
    localStorage.setItem("darkmode", String(darkmode));
  }, [darkmode]);

  let NavBarBaseContent = ({ verbose = false }: { verbose?: boolean }) => (
    <>
      <a href="#" onClick={
        (e) => {
          e.preventDefault();
          if (i18n.language === 'zh-CN') {
            i18n.changeLanguage('en');
          } else {
            i18n.changeLanguage('zh-CN');
          }
        }
      }>{t("translate.anotherlang" + (verbose ? ".verbose" : ""))}</a>
      <a href="https://github.com/LiaoxyuCM" target="_blank">
        {verbose ?
          <>GitHub</> :
          <Icons.GitHub />
        }
      </a>
      <a href="#" onClick={(e) => {
        e.preventDefault();
        setDarkmode(!darkmode);
      }}>
        {darkmode ?
          (
            verbose ?
              t("index.nav.theme.light") :
              <Icons.LightMode />
          ) :
          (
            verbose ?
              t("index.nav.theme.dark") :
              <Icons.DarkMode />
          )
        }
      </a>
      <a href="/friendlylinks">{t("index.nav.frdlylnks")}</a>
    </>
  )

  let NavBarBase = () => (
    <>
      <a href="/">LiaoxyuCM</a>
      <div
        className="pe" style={{ display: isMobile ? "" : "none" }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Icons.Menu />
      </div>
      <div className="pc" style={{ display: isMobile ? "none" : "" }}>
        <NavBarBaseContent />
      </div>

      {isMobile && ( // 死磕deepseek的第n天
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-btn ignore-button-default-style" onClick={() => setIsMenuOpen(false)}>✕</button>
          <NavBarBaseContent verbose={true} />
        </div>
      )}

    </>
  )

  // Navbar on Mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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

export function FooterBase({ advanced = false }: { advanced?: boolean }) {
  if (!advanced) {
    return (
      <p onClick={(e) => { // 因为你 linting，我TM多写两行代码 [哭]
        if (e.currentTarget.textContent) {
          e.currentTarget.textContent = "Hello, QiChong Chlorine!"; // Don't translate it to other langs, keep it english.
        }
      }}>&copy; LiaoxyuCM Lclimir × LcmTech 2024-{new Date().getFullYear()}</p> // It either (see above).
    )
  };

  let siteTimer = useRef<HTMLParagraphElement>(null);
  let { t } = useTranslation();
  let timerContentTemplate: string = t("index.timer");
  useEffect(() => {
    const startTime: number = new Date('2026/01/04 22:25:00').getTime();
    function fmtDuration(ms: number): string {
      const day: number = Math.floor(ms / 86400000);
      const hour: number = Math.floor(ms % 86400000 / 3600000);
      const min: number = Math.floor(ms % 3600000 / 60000);
      const sec: number = Math.floor(ms % 60000 / 1000);
      return timerContentTemplate
        .replace(/%d/g, day.toString())
        .replace(/%h/g, hour.toString())
        .replace(/%m/g, min.toString())
        .replace(/%s/g, sec.toString());
    }
    function update() {
      if (siteTimer.current) {
        siteTimer.current!.textContent = fmtDuration(Date.now() - startTime);
      }
    }

    update();
    const interval: number = setInterval(update, 150);

    return () => clearInterval(interval);
  }, [timerContentTemplate]);

  return (
    <>
      <FooterBase />
      <p ref={siteTimer}></p>
    </>
  )
}

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [closestInteractable, setClosestInteractable] = useState<boolean>(false);
  const [hasMouse, setHasMouse] = useState<boolean>(false);

  useEffect(() => {
    const checkMouse = () => {
      const hasMouseDevice = window.matchMedia('(pointer: fine)').matches;
      setHasMouse(hasMouseDevice);
    };

    checkMouse();

    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) { setHasMouse(e.matches) }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX - 20}px`;
      cursor.style.top = `${event.clientY - 20}px`;
    };

    const selectors = 'a, button, select, .selectbar, nav div.pe svg';

    const handleMouseOver = (e: MouseEvent) => {
      const isInteractable = (e.target as HTMLElement).closest(selectors);
      setClosestInteractable(!!isInteractable);
    };
    const handleMouseOut = (e: MouseEvent) => {
      const isInteractable = (e.target as HTMLElement).closest(selectors);
      if (isInteractable) setClosestInteractable(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        display: hasMouse ? 'block' : 'none',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'border-radius 0.2s ease, box-shadow 0.2s ease, width 0.2s ease, height 0.2s ease, transform 0.2s ease',
        background: 'none',
        width: closestInteractable ? '80px' : '40px',
        height: closestInteractable ? '80px' : '40px',
        borderRadius: '50%',
        boxShadow: closestInteractable
          ? '0 0 0 2px var(--nav-text-color, black)'
          : '0 0 0 1px var(--nav-text-color, black)',
        transform: closestInteractable ? 'translate(-20px, -20px)' : 'none',
      }}
    />
  );
}
