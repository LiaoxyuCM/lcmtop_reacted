import { useEffect } from "react";
import { Card, Timeline, SelectBar } from "./modules/components"
import { useTranslation } from 'react-i18next'

function Styletest() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("teststyle.element.h1")} h1</h1>
      <h2>{t("teststyle.element.h2")} h2</h2>
      <h3>{t("teststyle.element.h3")} h3</h3>
      <h4>{t("teststyle.element.h4")} h4</h4>
      <h5>{t("teststyle.element.h5")} h5</h5>
      <h6>{t("teststyle.element.h6")} h6</h6>
      <p>
        {t("teststyle.element.p")} p&nbsp;
        <strong>{t("teststyle.element.strong")} p&gt;strong</strong>&nbsp;
        <em>{t("teststyle.element.em")} p&gt;em</em>&nbsp;
        <u>{t("teststyle.element.u")} p&gt;u</u>&nbsp;
        <del>{t("teststyle.element.del")} p&gt;del</del>
        <br />
        <a href="#" onClick={(e) => { e.preventDefault() }}>
          {t("teststyle.element.a")} [p&gt;]a
        </a>
        <br />
        <code>
          # {t("teststyle.element.code.comment")} p&gt;code<br />
          from django.http import HttpResponse, HttpRequest<br /><br />
          def helloView(request: HttpRequest):<br />
          &nbsp;&nbsp;return HttpResponse(f"Hello, from {"{request.GET.get('name', 'React.js')}"}!")
        </code>
      </p>
      <button>{t("teststyle.element.button")} button</button>
      <div className="buttongroup">
        <button>{t("teststyle.element.button")} 1 .buttongroup&gt;button+</button>
        <button>{t("teststyle.element.button")} 2</button>
        <button className="selected">
          {t("teststyle.element.button.highlighted")} button.selected
        </button>
        <button disabled>{t("teststyle.element.button.disabled")} button[disabled]</button>
      </div>
      <input
        name="namefield.teststyle.input"
        type="text"
        placeholder={t("teststyle.element.input") + " input"}
      />
      <textarea
        name="namefield.teststyle.textarea"
        placeholder={t("teststyle.element.textarea") + " textarea"}>
      </textarea>
      <select name="namefield.teststyle.select">
        <option value="one">{t("teststyle.element.choice")} 1 select&gt;option+</option>
        <option value="two">{t("teststyle.element.choice")} 2</option>
        <option value="three">{t("teststyle.element.choice")} 3</option>
      </select>
      <SelectBar
        choices={
          [
            t("teststyle.element.selectbar") + " SelectBar({choices: string[], selected?: number}) => JSX.Element",
            t("teststyle.element.selectbar"),
            t("teststyle.element.selectbar")
          ]
        }
      />
      <a href="/styletest/doc/components#selectbar">{
        t("teststyle.doc.components.learn")
          .replace(/%el/g, t("teststyle.element.selectbar"))}
      </a>
      <br />

      <div className="hint">
        {t('teststyle.hint')} .hint
      </div>
      <br />
      <p>{t('teststyle.hintgroup')} .hintgroup&gt;.hint</p>
      <div className="hintgroup">
        {
          ['error', 'warn', 'success', 'info', 'debug'].map((type) => (
            <div className={`hint ${type}`} key={type}>
              {t(`teststyle.hint.${type}`)} div.hint.{type}
            </div>
          ))
        }
      </div>
      <ul>
        <li>{t("teststyle.element.list")} ul&gt;li+</li>
        <li>{t("teststyle.element.list")}</li>
        <li>{t("teststyle.element.list")}</li>
      </ul>
      <div className="cards">
        <Card
          title={t("teststyle.element.card")}
          content="div.cards&gt;a+&gt;div.card&gt;{h3, p.description}"
          link=""
        />
        <Card
          title="React"
          content={
            t("teststyle.doc.components.learn")
              .replace(/%el/g, t("teststyle.element.card"))
          }
          link="/styletest/doc/components#card"
        />
        <Card
          title={t("teststyle.element.card")}
          content="Lorem ipsum dolor sit amet"
          link=""
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>{t("teststyle.element.table.col")} table&gt;thead&gt;tr&gt;th+</th>
            <th>{t("teststyle.element.table.col")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("teststyle.element.table.value")} table&gt;tbody&gt;tr+&gt;td+</td>
            <td>{t("teststyle.element.table.value")}</td>
          </tr>
          <tr>
            <td>{t("teststyle.element.table.value")}</td>
            <td>{t("teststyle.element.table.value")}</td>
          </tr>
        </tbody>
      </table>
      <div className="timeline">
        <Timeline
          datetime={t("teststyle.element.timeline")}
          content=".timeline&gt;.timeline-item+&gt;{.timeline-dot, .timeline-date, .timeline-content&gt;p}"
        />
        <Timeline
          datetime={t("teststyle.element.timeline")}
          content="Timeline({datetime: string, content: string}) => JSX.Element"
        />
      </div>
      <a href="/styletest/doc/components#timeline">{
        t("teststyle.doc.components.learn")
          .replace(/%el/g, t("teststyle.element.timeline"))}
      </a>
    </>
  )
}


export function ComponentsDoc() {
  const { t } = useTranslation();

  useEffect(() => {
    let rawHash: string = window.location.hash;
    if (!(!rawHash || rawHash === '#')) {

      let targetId: string = rawHash.substring(1);

      if (targetId) {
        const targetElement = document.getElementById("art:" + targetId);
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const currentScroll = window.pageYOffset;
          const targetPosition = currentScroll + elementPosition - 50;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    }

  }, []);

  const ParamThead = () => (
    <thead>
      <tr>
        <th>{t("teststyle.doc.components.param.name")}</th>
        <th>{t("teststyle.doc.components.param.type")}</th>
        <th>{t("teststyle.doc.components.param.required")}</th>
        <th>{t("teststyle.doc.components.param.default")}</th>
      </tr>
    </thead>
  )
  return (
    <>
      <p>{t("teststyle.doc.components.intro")}</p>
      <br />

      <h2 id="art:selectbar">{t("teststyle.element.selectbar")} &lt;SelectBar /&gt;</h2>
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

      <h2 id="art:card">{t("teststyle.element.card")} &lt;Card /&gt;</h2>
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

      <h2 id="art:card-frdlylnk">{t("teststyle.element.card.frdlylnk")} &lt;CardFriendlyLink /&gt;</h2>
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

      <h2 id="art:timeline">{t("teststyle.element.timeline")} &lt;Timeline /&gt;</h2>
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

export default Styletest
