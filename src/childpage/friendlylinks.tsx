import { useTranslation } from "react-i18next";
import { CardFriendlyLink } from "./modules/components";

function FriendlyLinksContent() {
  const { t } = useTranslation();
  const frdlylnksData = [
    {
      link: "https://muah.top",
      title: t("frdlylnks.huayumomo"),
      content: `2024 - 2026 ${t("frdlylnks.huayumomo.nexacore")} & ${t("frdlylnks.huayumomo.chenqingmua")}`,
      imagesrc: "https://assets.liaoxyucm.top/muah.top/g.jpg"
    },
    {
      link: "https://zhkj.bzxhkj.com",
      title: "工农阶级万岁🅥", // He has no english name so don't translate it to english, if u wanna do it, ask him 1st.
      content: "© 2025 " + t("frdlylnks.gnjjws.content"),
      imagesrc: "https://assets.liaoxyucm.top/zh2026.cn/tx.jpg"
    },
    {
      link: "https://tunhs.mysxl.cn",
      title: "ZI",
      content: t("frdlylnks.zi.content"),
      imagesrc: "https://assets.liaoxyucm.top/tunhs.mysxl.cn/icon.jpg"
    },
    {
      link: "https://www.sgyyds.club",
      title: "孙哥科技",
      content: "孙哥科技是一个专注于 Web 开发、开源项目分享与技术写作 的个人技术品牌。",
      imagesrc: "https://www.sgyyds.club/favicon.ico"
    }
  ]
  return (
    <>
      <div className="cards frdlylnks">
        {frdlylnksData.map((value, index) => (
          <CardFriendlyLink
            key={index}
            title={value.title}
            content={value.content}
            link={value.link}
            imagesrc={value.imagesrc}
          />
        ))}
      </div>
    </>
  )
}



export default FriendlyLinksContent;
