import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from './modules/components';
import Icons from './modules/icons.tsx';

export default function HomepageContent() {
  const { t } = useTranslation();
  const [filter1, setFilter1] = useState<string>('@all');
  const [filter2, setFilter2] = useState<string>('@all');
  const isCardVisible: (cardClasses: string) => boolean = (cardClasses: string) => {
    const match1: boolean = filter1 === '@all' || cardClasses.includes(filter1);
    const match2: boolean = filter2 === '@all' || cardClasses.includes(filter2);
    return match1 && match2;
  }

  const generateFilterOption = (key_: string) => (<option key={key_} value={key_}>{t("content.filter." + key_)}</option>)

  const cardsData: {
    link: string,
    title: string,
    content: string,
    filter: string[],
    targetblank?: boolean
  }[] = [
    {
      link: 'https://github.com/LiaoxyuCM/lcmtop_reacted',
      title: t("content.card.siterepo.title"),
      content: t("content.card.siterepo.content"),
      filter: ["red2gh", "program"],
      targetblank: true
    },
    {
      link: 'https://github.com/LiaoxyuCM/lcmtop_reacted/issues',
      title: t("content.card.feedback.title"),
      content: t("content.card.feedback.content"),
      filter: ["red2gh", "sitesupport"],
      targetblank: true
    },
    {
      link: '/styletest',
      title: t("content.card.teststyle.title"),
      content: t("content.card.teststyle.content"),
      filter: ["thissite", "sitetool"],
      targetblank: false
    },
    {
      link: 'https://about.liaoxyucm.top',
      title: t("content.card.aboutme.title"),
      content: t("content.card.aboutme.content"),
      filter: ["thissite", "sitesupport"]
    },
    {
      link: 'https://starter.liaoxyucm.top',
      title: t("content.card.starter.title"),
      content: t("content.card.starter.content"),
      filter: ["thissite", "program"]
    },
    {
      link: 'https://encode.liaoxyucm.top',
      title: t("content.card.encoder.title"),
      content: t("content.card.encoder.content"),
      filter: ["thissite", "sitetool"]
    },
    {
      link: 'https://tools.liaoxyucm.top/randompicker',
      title: t("content.card.randompicker.title"),
      content: t("content.card.randompicker.content"),
      filter: ["thissite", "sitetool"]
    },
    {
      link: 'https://tools.liaoxyucm.top/unwasting',
      title: "Unwasting",
      content: t("content.card.unwasting.content"),
      filter: ["thissite", "sitetool"]
    },
  ]

  return (
    <>
      <form method="get" action="https://cn.bing.com/search" style={{ display: "flex" }}>
        <input name="q" placeholder={t("content.search_via_bing")} style={
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
      <select
        id="filter-control-1"
        value={filter1}
        onChange={(e) => setFilter1(e.target.value)}
      >
        <option value="@all">--{t("content.filter")}--</option>
        {
          ['red2gh', 'thissite'].map(key => generateFilterOption(key))
        }
      </select>

      <select
        id="filter-control-2"
        value={filter2}
        onChange={(e) => setFilter2(e.target.value)}
      >
        <option value="@all">--{t("content.filter")}--</option>
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
