import { styled } from 'styled-components';
import { NavBar, FooterBase, Cursor } from './modules/template_components';
import { useTranslation } from 'react-i18next';
import { Card, Icons } from './modules/components';
import { showToast } from './modules/toast';
import { useState } from 'react';

function HomepageContent() {
  const { t } = useTranslation();
  const [filter1, setFilter1] = useState<string>('@all');
  const [filter2, setFilter2] = useState<string>('@all');
  const isCardVisible = (cardClasses: string) => {
    const match1 = filter1 === '@all' || cardClasses.includes(filter1);
    const match2 = filter2 === '@all' || cardClasses.includes(filter2);
    return match1 && match2;
  }

  const generateFilterOption = (key_: string) => (<option key={key_} value={key_}>{t("index.filter." + key_)}</option>)

  const cardsData = [
    {
      link: 'https://github.com/LiaoxyuCM/liaoxyucmTop_reacted',
      title: t("index.card.siterepo.title"),
      content: t("index.card.siterepo.content"),
      filter: ["red2gh", "program"],
      targetblank: true
    },
    {
      link: 'https://github.com/LiaoxyuCM/liaoxyucmTop_reacted/issues',
      title: t("index.card.feedback.title"),
      content: t("index.card.feedback.content"),
      filter: ["red2gh", "sitesupport"],
      targetblank: true
    },
    {
      link: '/styletest',
      title: t("index.card.teststyle.title"),
      content: t("index.card.teststyle.content"),
      filter: ["thissite", "sitetool"],
      targetblank: false
    },
    {
      link: 'https://about.liaoxyucm.top',
      title: t("index.card.aboutme.title"),
      content: t("index.card.aboutme.content"),
      filter: ["thissite", "sitesupport"]
    },
    {
      link: 'https://starter.liaoxyucm.top',
      title: t("index.card.starter.title"),
      content: t("index.card.starter.content"),
      filter: ["thissite", "program"]
    },
    {
      link: 'https://encode.liaoxyucm.top',
      title: t("index.card.encoder.title"),
      content: t("index.card.encoder.content"),
      filter: ["thissite", "sitetool"]
    },
    {
      link: 'https://tools.liaoxyucm.top/randompicker',
      title: t("index.card.randompicker.title"),
      content: t("index.card.randompicker.content"),
      filter: ["thissite", "sitetool"]
    }
  ]

  return (
    <>
      <form method="get" action="https://cn.bing.com/search" style={{ display: "flex" }}>
        <input name="q" placeholder={t("index.search_via_bing")} style={
          {
            flex: "1 1 0%",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }
        } />
        <button type="submit" style={
          {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }
        }>=&gt;</button>
      </form>
      <div className="hint">
        <p>{t("index.rewritten_using_react")}</p>
      </div>
      <select
        id="filter-control-1"
        value={filter1}
        onChange={(e) => setFilter1(e.target.value)}
      >
        <option value="@all">--{t("index.filter")}--</option>
        {
          ['red2gh', 'thissite'].map(key => generateFilterOption(key))
        }
      </select>

      <select
        id="filter-control-2"
        value={filter2}
        onChange={(e) => setFilter2(e.target.value)}
      >
        <option value="@all">--{t("index.filter")}--</option>
        {
          ['program', 'sitetool', 'sitesupport'].map(key => generateFilterOption(key))
        }
      </select>

      <div className="cards">
        {cardsData.map((card, index) => {
          const visible = isCardVisible(card.filter ? card.filter.join(" ") : "");

          return (
            <Card
              link={card.link}
              title={card.title}
              content={card.content}
              iconAttach={card.filter.includes("red2gh") ? <Icons.GitHub /> : <></>}
              targetblank={card.targetblank}
              visible={visible}
              key={index}
            />
          );
        })}
      </div>
    </>
  )
}


const HomepageStyles = {
  BackImg: styled.div`
    height: 100vh;
    width: 100%;
    background-image: url("https://assets.liaoxyucm.top/wallpaper.jpg");
    position: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -9178;
  `,
  Overlay: styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--overlay-bg-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  MainParent: styled.div`
    background-color: var(--body-bg-color);
    position: relative;
    z-index: 0;
  `,
  Subtitle: styled.p`
    color: var(--subtitle-text-color);
    display: flex;
    justify-content: center;
  `
}

function Homepage() {
  const { t } = useTranslation();
  // Greeting: 0AM-5AM late_night, 6AM-11AM morning, 12AM-3PM noon, 4PM-6PM afternoon, 7PM-9PM evening, 10PM-0AM night
  let greet: string = ""
  switch (new Date().getHours()) {
    case 0: case 1: case 2: case 3: case 4: case 5:
      greet = "late_night";
      break
    case 6: case 7: case 8: case 9: case 10: case 11:
      greet = "morning";
      break;
    case 12: case 13: case 14: case 15:
      greet = "noon";
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

  showToast.hook(t("index.greeting." + greet));
  return (
    <>
      <Cursor />
      <NavBar advanced={true} />
      <HomepageStyles.BackImg />
      <HomepageStyles.Overlay>
        <h1>{t("index.welcome")}</h1>
        <HomepageStyles.Subtitle>
          /* LiaoxyuCM, LcmTech */
        </HomepageStyles.Subtitle>
        <Icons.Scrolldown />
      </HomepageStyles.Overlay>
      <HomepageStyles.MainParent>
        <main>
          <HomepageContent />
        </main>
      </HomepageStyles.MainParent>
      <footer style={{ margin: 0 }}>
        <FooterBase advanced={true} />
      </footer>
    </>
  )
}

export default Homepage
