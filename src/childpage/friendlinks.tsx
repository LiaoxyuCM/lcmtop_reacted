import { useTranslation } from "react-i18next";
import { CardFriendLink } from "./modules/components";

function FriendLinksContent() {
  const { t } = useTranslation();
  const friendlinksData: {
    link: string,
    title: string,
    content: string,
    imagesrc: string
  }[] = [
    {
      link: "https://muah.top",
      title: "MuaHax",
      content: `2024 - 2026 ${t("friendlinks.muahax.content")}`,
      imagesrc: "https://assets.liaoxyucm.top/muah.top/g.jpg"
    },
    {
      link: "https://zh2026.cn",
      title: "工农阶级万岁🅥",
      content: "© 2025 " + t("friendlinks.zhtech"),
      imagesrc: "https://zh2026.cn/tx.jpg"
    },
    {
      link: "https://tunhs.mysxl.cn",
      title: "ZI",
      content: t("friendlinks.zi"),
      imagesrc: "https://assets.liaoxyucm.top/tunhs.mysxl.cn/favicon.ico"
    },
    {
      link: "https://www.sgyyds.club",
      title: "孙哥科技",
      content: `孙哥科技${t("friendlinks.sungge")}`,
      imagesrc: "https://www.sgyyds.club/favicon.ico"
    }
  ];
  return (
    <>
      <div className="cards friendlinks">
        {friendlinksData.map((value, index: number) => (
          <CardFriendLink
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



export default FriendLinksContent;
