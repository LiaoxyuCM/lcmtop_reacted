import { useTranslation } from "react-i18next";
import { CardFriendlyLink } from "./modules/components";

function FriendlyLinksContent() {
  const { t } = useTranslation();
  const frdlylnksData = [
    {
      link: "https://muah.top",
      title: t("frdlylnks.huayumomo"),
      content: `2024 - 2026 ${t("frdlylnks.huayumomo.content")}`,
      imagesrc: "https://assets.liaoxyucm.top/muah.top/g.jpg"
    },
    {
      link: "https://zh2026.cn",
      title: "工农阶级万岁🅥", // He has no english name so don't translate it to english, if u wanna do it, ask him 1st.
      content: "© 2025 " + t("frdlylnks.gnjjws.content"),
      imagesrc: "https://zh2026.cn/tx.jpg"
    },
    {
      link: "https://tunhs.mysxl.cn",
      title: "ZI",
      content: t("frdlylnks.zi.content"),
      imagesrc: "https://assets.liaoxyucm.top/tunhs.mysxl.cn/favicon.ico"
    },
    {
      link: "https://www.sgyyds.club",
      title: "孙哥科技",
      content: `孙哥科技${t("frdlylnks.sungge.content")}`,
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
