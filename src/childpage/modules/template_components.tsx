import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "./components";
import "./css/cursor.scss";

export function NavBar({ advanced = false }: { advanced?: boolean }) {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // read color theme (light / dark) from localStorage and set it to the root element
  const [darkmode, setDarkmode] = useState<boolean>(
    Boolean(localStorage.getItem("darkmode") === "true")
  );


  const NavBarBaseContent = ({ verbose = false }: { verbose?: boolean }) => (
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
        const newDarkmode = !darkmode;
        setDarkmode(newDarkmode);
        localStorage.setItem("darkmode", (!darkmode).toString());
        if (newDarkmode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
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

  const NavBarBase = () => (
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
      <p onClick={(e) => {
        if (e.currentTarget.textContent) {
          e.currentTarget.textContent = "Hello, QiChong & QiJun Chlorine!"; // Don't translate it to other langs, keep it english.
        }
      }}>&copy; LiaoxyuCM Lclimir × FrontMeteor 2024-{new Date().getFullYear()}</p> // It either (see above).
    )
  };

  const siteTimer = useRef<HTMLParagraphElement>(null);
  const { t } = useTranslation();
  const timerContentTemplate: string = t("index.timer");
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
      <div className="footer footer-basic">
        <FooterBase />
        <p ref={siteTimer}></p>
      </div>
    </>
  )
}

export function Cursor() {
  const [msX, smsX] = useState<number>(0);
  const [msY, smsY] = useState<number>(0);
  const [cW, scW] = useState<string>("4.2rem");
  const [cH, scH] = useState<string>("4.2rem");
  const [cTgt, scTgt] = useState<HTMLElement | null>(null);
  // const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      let mcaX: number = ev.clientX;
      let mcaY: number = ev.clientY;
      
      if (cTgt) {
        const rect = cTgt.getBoundingClientRect();
        const cttX: number = rect.left + rect.width / 2;
        const cttY: number = rect.top + rect.height / 2;
        mcaX = cttX + (mcaX - cttX) * 0.1;
        mcaY = cttY + (mcaY - cttY) * 0.1;
      }
      smsX(mcaX);
      smsY(mcaY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cTgt]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      "a, .card, input, select, textarea, button, .selectbar div"
    ); // There aren't any toast-notifications matched, so I removed this selector.

    const handleEnter = (el: HTMLElement) => {
      return () => {
        scTgt(el);
        const rect = el.getBoundingClientRect();
        scW(`${rect.width + window.innerWidth / 50}px`);
        scH(`${rect.height + window.innerWidth / 50}px`);
      };
    };

    const handleLeave = () => {
      scTgt(null);
      scW("4.2rem");
      scH("4.2rem");
    };

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter(el as HTMLElement));
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter(el as HTMLElement));
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);
  return (
    <div
      className="cursor"
      style={{
        "--c-width": cW,
        "--c-height": cH,
        transform: `translate(${msX}px, ${msY}px)`
      } as React.CSSProperties }
    >
      {["", "", "", ""].map((_, index) => (
        <div key={index} />
      ))}
    </div>
  );
}
