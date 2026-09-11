import { useEffect, useState, type JSX } from "react";
import { Card, TimelineItem, SelectBar, CodeField } from "./modules/components"
import { useTranslation } from 'react-i18next'

export function Styletest() {
  const { t } = useTranslation();
  const [isToggleButtonActive, sistba] = useState<boolean>(false);
  const te = (data: string, params?: Record<string, string>) => (t("teststyle.element." + data, params))
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((level: number) => {
        const Tag = `h${level}` as keyof JSX.IntrinsicElements;
        return (
          <Tag key={level}>
            {te("header", { lvl: String(level) })} h{level}
          </Tag>
        );
      })}
      <p>
        {te("p")} p&nbsp;
        <strong>{te("strong")} p&gt;strong</strong>&nbsp;
        <em>{te("em")} p&gt;em</em>&nbsp;
        <u>{te("u")} p&gt;u</u>&nbsp;
        <del>{te("del")} p&gt;del</del>
        <br />
        <a href="#" onClick={(e) => { e.preventDefault() }}>
          {te("a")} [p&gt;]a
        </a>
      </p>
      <CodeField code={`# ${te("code.comment")} CodeField(...)
from django.http import HttpResponse, HttpRequest
def helloView(request: HttpRequest):
    return HttpResponse(f"Hello from {request.GET.get('name', 'React.ts')}!")`} />
      <p>
        <a href="/styletest/doc/components#codefield">{
          t("teststyle.doc.components.learn", {el: te("codefield")})
        }</a>
      </p>
      <button>{te("button.default")} button</button>
      <button
        className={isToggleButtonActive ? "selected" : ""}
        onClick={()=>{
          sistba(!isToggleButtonActive);
        }}
      >{te("button.toggle")}</button>
      <div className="buttongroup">
        <button>{te("button.default")} 1 .buttongroup&gt;button+</button>
        <button>{te("button.default")} 2</button>
        <button className="selected">
          {te("button.highlighted")} button.selected
        </button>
        <button disabled>{te("button.disabled")} button[disabled]</button>
      </div>
      <input
        name="namefield.teststyle.input"
        type="text"
        placeholder={te("input") + " input"}
      />
      <textarea
        name="namefield.teststyle.textarea"
        placeholder={te("textarea") + " textarea"}>
      </textarea>
      <select name="namefield.teststyle.select">
        {[" select>option+", "", ""].map((value: string, index: number) => (
          <option key={index} value={`opt_${index}`}>{te("choice") + `${index}${value}`}</option>
        ))}
      </select>
      <SelectBar
        choices={[
          te("selectbar") + " SelectBar(...)",
          te("selectbar"),
          te("selectbar")
        ]}
      />
      <a href="/styletest/doc/components#selectbar">{
        t("teststyle.doc.components.learn", {el: te("selectbar")})
      }</a>
      <br />

      <div className="hint">
        {te('hint.single')} .hint
      </div>
      <br />
      <p>{te('hintgroup')} .hintgroup&gt;.hint</p>
      <div className="hintgroup">
        {['error', 'warn', 'success', 'info', 'debug'].map((type: string) => (
          <div className={`hint ${type}`} key={type}>
            {t(`teststyle.lvl.${type}`) + te('hint.default')} div.hint.{type}
          </div>
        ))}
      </div>
      <ul>
        {[" ul>li+", "", ""].map((value: string, index: number) => (
          <li key={index}>{te("list") + value}</li>
        ))}
      </ul>
      <div className="cards">
        <Card
          title={te("card.normal")}
          content="div.cards&gt;Card(...)"
          link=""
        />
        <Card
          title="React"
          content={
            t("teststyle.doc.components.learn", {el: te("card.normal")})
          }
          link="/styletest/doc/components#card"
        />
        <Card
          title={te("card.normal")}
          content="Lorem ipsum dolor sit amet"
          link=""
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>{te("table.col")} table&gt;thead&gt;tr&gt;th+</th>
            <th>{te("table.col")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{te("table.value")} table&gt;tbody&gt;tr+&gt;td+</td>
            <td>{te("table.value")}</td>
          </tr>
          <tr>
            <td>{te("table.value")}</td>
            <td>{te("table.value")}</td>
          </tr>
        </tbody>
      </table>
      <div className="timeline">
        <TimelineItem
          datetime={te("timeline")}
          content=".timeline&gt;.timeline-item+&gt;{.timeline-dot, .timeline-date, .timeline-content&gt;p}"
        />
        <TimelineItem
          datetime={te("timeline")}
          content=".timeline&gt;TimelineItem(...)"
        />
      </div>
      <a href="/styletest/doc/components#timeline">
        {t("teststyle.doc.components.learn", {el: te("timeline")})}
      </a><br />
      <a href="/styletest/play/toast">
        {t("teststyle.toast.enter")}
      </a>
    </>
  )
}

const ParamThead = () => {
  const { t } = useTranslation();
  return (
    <thead>
      <tr>
        {["name", "type", "required", "default"].map((key: string) => (
          <th key={key}>{t("teststyle.doc.components.param." + key)}</th>
        ))}
      </tr>
    </thead>
  )
}

export function ComponentsDoc() {
  const { t } = useTranslation();
  const te = (data: string) => (t("teststyle.element." + data))

  useEffect(() => {
    const rawHash: string = window.location.hash;
    if (!(!rawHash || rawHash === '#')) {

      const targetId: string = rawHash.substring(1);

      if (targetId) {
        const targetElement = document.getElementById("art:" + targetId);
        if (targetElement) {
          const elementPosition: number = targetElement.getBoundingClientRect().top;
          const currentScroll: number = window.pageYOffset;
          const targetPosition: number = currentScroll + elementPosition - 50;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    }

  }, []);

  return (
    <>
      <h2 id="art:codefield">{te("codefield")} &lt;CodeField /&gt;</h2>
      <table>
        <ParamThead />
        <tbody>
          <tr>
            <td>code</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
      <h2 id="art:selectbar">{te("selectbar")} &lt;SelectBar /&gt;</h2>
      <table>
        <ParamThead />
        <tbody>
          <tr>
            <td>choices</td>
            <td>string[]</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
          <tr>
            <td>selectedIdx</td>
            <td>number</td>
            <td>{t("global.no")}</td>
            <td>0</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>(index: number) =&gt; void</td>
            <td>{t("global.no")}</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h2 id="art:card">{te("card.normal")} &lt;Card /&gt;</h2>
      <table>
        <ParamThead />
        <tbody>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
          <tr>
            <td>iconAttach</td>
            <td>ReactNode (svg)</td>
            <td>{t("global.no")}</td>
            <td></td>
          </tr>
          <tr>
            <td>content</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
          <tr>
            <td>link</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
          <tr>
            <td>visible</td>
            <td>boolean</td>
            <td>{t("global.no")}</td>
            <td>true</td>
          </tr>
          <tr>
            <td>targetblank</td>
            <td>boolean</td>
            <td>{t("global.no")}</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <h2 id="art:card-friendlink">{te("card.friendlink")} &lt;CardFriendLink /&gt;</h2>
      <table>
        <ParamThead />
        <tbody>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
          <tr>
            <td>content</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
          <tr>
            <td>link</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
          <tr>
            <td>imagesrc</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
          <tr>
            <td>targetblank</td>
            <td>boolean</td>
            <td>{t("global.no")}</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>

      <h2 id="art:timeline">{te("timeline")} &lt;TimelineItem /&gt;</h2>
      <table>
        <ParamThead />
        <tbody>
          <tr>
            <td>datetime</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
          <tr>
            <td>content</td>
            <td>string</td>
            <td>{t("global.yes")}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

