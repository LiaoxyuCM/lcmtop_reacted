import { styled } from 'styled-components';
import { NavBar, FooterBase } from './modules/dynamic_components';
import { useTranslation } from 'react-i18next';
import { Card, Icons } from './modules/components';
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
            flex: 1,
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
  return (
    <>
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
      <section className="footer" style={{ margin: 0 }}>
        <FooterBase advanced={true} />
      </section>
    </>
  )
}

export default Homepage
