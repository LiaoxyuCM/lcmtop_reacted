import { useTranslation } from "react-i18next";
import { CardFriendlyLink } from "./modules/components";

function FriendlyLinksContent() {
  const { t } = useTranslation();
  return (
    <>
      <div className="cards frdlylnks">
        <CardFriendlyLink
          title={t("frdlylnks.huayumomo")}
          content={
            `2024 - 2026 ${t("frdlylnks.huayumomo.moking")} & ${t("frdlylnks.huayumomo.chenqingmua")}`
          }
          link="https://muah.top"
          imagesrc="https://assets.liaoxyucm.top/muah.top/g.jpg"
        />
        <CardFriendlyLink
          title="工农阶级万岁🅥" // He has no english name so don't translate it to english, if u wanna do it, ask him 1st.
          content={"© 2025 " + t("frdlylnks.gnjjws.content")}
          link="http://zhkj.bzxhkj.com"
          imagesrc="https://assets.liaoxyucm.top/zh2026.cn/tx.jpg"
        />
        <CardFriendlyLink
          title="ZI"
          content={t("frdlylnks.zi.content")}
          link="https://tunhs.mysxl.cn"
          imagesrc="https://assets.liaoxyucm.top/tunhs.mysxl.cn/icon.jpg"
        />
      </div>

    </>
  )
}



export default FriendlyLinksContent;
