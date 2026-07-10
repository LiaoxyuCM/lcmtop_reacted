import { useEffect } from "react";
import { Card, Timeline, SelectBar } from "./modules/components"
import { useTranslation } from 'react-i18next'

export function Styletest() {
  const { t } = useTranslation();
  const te = (data: string) => (t("teststyle.element." + data))
  return (
    <>
      <h1>{te("h1")} h1</h1>
      <h2>{te("h2")} h2</h2>
      <h3>{te("h3")} h3</h3>
      <h4>{te("h4")} h4</h4>
      <h5>{te("h5")} h5</h5>
      <h6>{te("h6")} h6</h6>
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
        <br />
        <code>
          # {te("code.comment")} p&gt;code<br />
          from django.http import HttpResponse, HttpRequest<br /><br />
          def helloView(request: HttpRequest):<br />
          &nbsp;&nbsp;return HttpResponse(f"Hello from {"{request.GET.get('name', 'React.ts')}"}!")
        </code>
      </p>
      <button>{te("button")} button</button>
      <div className="buttongroup">
        <button>{te("button")} 1 .buttongroup&gt;button+</button>
        <button>{te("button")} 2</button>
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
        {[" select>option+", "", ""].map((value, index) => (
          <option key={index} value={`opt_${index}`}>{te("choice") + `${index}${value}`}</option>
        ))}
      </select>
      <SelectBar
        choices={[
          te("selectbar") + " SelectBar({choices: string[], selected?: number}) => JSX.Element",
          te("selectbar"),
          te("selectbar")
        ]}
      />
      <a href="/styletest/doc/components#selectbar">{
        t("teststyle.doc.components.learn")
          .replace(/%el/g, te("selectbar"))}
      </a>
      <br />

      <div className="hint">
        {t('teststyle.element.hint.single')} .hint
      </div>
      <br />
      <p>{t('teststyle.element.hintgroup')} .hintgroup&gt;.hint</p>
      <div className="hintgroup">
        {['error', 'warn', 'success', 'info', 'debug'].map((type) => (
          <div className={`hint ${type}`} key={type}>
            {t(`teststyle.lvl.${type}`) + t('teststyle.element.hint')} div.hint.{type}
          </div>
        ))}
      </div>
      <ul>
        {[" ul>li+", "", ""].map((value, index) => (
          <li key={index}>{te("list") + value}</li>
        ))}
      </ul>
      <div className="cards">
        <Card
          title={te("card")}
          content="div.cards&gt;a+&gt;div.card&gt;{h3, p.description}"
          link=""
        />
        <Card
          title="React"
          content={
            t("teststyle.doc.components.learn")
              .replace(/%el/g, te("card"))
          }
          link="/styletest/doc/components#card"
        />
        <Card
          title={te("card")}
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
        <Timeline
          datetime={te("timeline")}
          content=".timeline&gt;.timeline-item+&gt;{.timeline-dot, .timeline-date, .timeline-content&gt;p}"
        />
        <Timeline
          datetime={te("timeline")}
          content="Timeline({datetime: string, content: string}) => JSX.Element"
        />
      </div>
      <a href="/styletest/doc/components#timeline">
        {t("teststyle.doc.components.learn")
          .replace(/%el/g, te("timeline"))}
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
        {["name", "type", "required", "default"].map((key) => (
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
      <p>{t("teststyle.doc.components.intro")}</p>
      <br />

      <h2 id="art:selectbar">{te("selectbar")} &lt;SelectBar /&gt;</h2>
      <h3>{t("teststyle.doc.components.param")}</h3>
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
        </tbody>
      </table>
      <h3>{t("teststyle.doc.components.returns")}</h3>
      <p>JSX.Element</p>
      <br />
      <br />

      <h2 id="art:card">{te("card")} &lt;Card /&gt;</h2>
      <h3>{t("teststyle.doc.components.param")}</h3>
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
      <h3>{t("teststyle.doc.components.returns")}</h3>
      <p>JSX.Element</p>
      <br />
      <br />

      <h2 id="art:card-frdlylnk">{te("card.frdlylnk")} &lt;CardFriendlyLink /&gt;</h2>
      <h3>{t("teststyle.doc.components.param")}</h3>
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
      <h3>{t("teststyle.doc.components.returns")}</h3>
      <p>JSX.Element</p>
      <br />
      <br />

      <h2 id="art:timeline">{te("timeline")} &lt;Timeline /&gt;</h2>
      <h3>{t("teststyle.doc.components.param")}</h3>
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
      <h3>{t("teststyle.doc.components.returns")}</h3>
      <p>JSX.Element</p>
      <br />
      <br />
    </>
  )
}

