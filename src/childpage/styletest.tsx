import { Card, Timeline } from "./modules/components"
import { useTranslation } from 'react-i18next'

function Styletest() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("teststyle.h1")} h1</h1>
      <h2>{t("teststyle.h2")} h2</h2>
      <h3>{t("teststyle.h3")} h3</h3>
      <h4>{t("teststyle.h4")} h4</h4>
      <h5>{t("teststyle.h5")} h5</h5>
      <h6>{t("teststyle.h6")} h6</h6>
      <p>
        {t("teststyle.p")} p&nbsp;
        <strong>{t("teststyle.strong")} strong</strong>&nbsp;
        <em>{t("teststyle.em")} em</em>&nbsp;
        <u>{t("teststyle.u")} u</u>&nbsp;
        <del>{t("teststyle.del")} del</del>
        <br />
        <a href="#" onClick={(e) => { e.preventDefault() }}>
          {t("teststyle.a")} a
        </a>
        <br />
        <code>
          # {t("teststyle.code.comment")}<br />
          from django.http import HttpResponse, HttpRequest<br /><br />
          def helloView(request: HttpRequest):<br />
          &nbsp;&nbsp;return HttpResponse("Hello, world!")
        </code>
      </p>
      <button>{t("teststyle.button")} button</button>
      <div className="buttongroup">
        <button>{t("teststyle.button")} 1 .buttongroup&gt;button+</button>
        <button>{t("teststyle.button")} 2</button>
        <button className="selected">
          {t("teststyle.button.highlighted")} button.selected
        </button>
        <button disabled>{t("teststyle.button.disabled")} button[disabled]</button>
      </div>
      <input
        name="namefield.teststyle.input"
        type="text"
        placeholder={t("teststyle.input") + " input"}
      />
      <textarea
        name="namefield.teststyle.textarea"
        placeholder={t("teststyle.textarea") + " textarea"}>
      </textarea>
      <select name="namefield.teststyle.select">
        <option value="one">{t("teststyle.choice")} 1 select&gt;option+</option>
        <option value="two">{t("teststyle.choice")} 2</option>
        <option value="three">{t("teststyle.choice")} 3</option>
      </select>
      <br />
      <div className="hint info">
        {t('teststyle.hint')}
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
        <li>{t("teststyle.list")} ul&gt;li+</li>
        <li>{t("teststyle.list")}</li>
        <li>{t("teststyle.list")}</li>
      </ul>
      <div className="cards">
        <Card
          title={t("teststyle.card")}
          content="div.cards&gt;a+&gt;div.card&gt;{h3, p.description}"
          link=""
        />
        <Card
          title={t("teststyle.card")}
          content="Lorem ipsum dolor sit amet"
          link=""
        />
        <Card
          title={t("teststyle.card")}
          content="Lorem ipsum dolor sit amet"
          link=""
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>{t("teststyle.table.col")} table&gt;thead&gt;tr&gt;th+</th>
            <th>{t("teststyle.table.col")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("teststyle.table.value")} table&gt;tbody&gt;tr+&gt;td+</td>
            <td>{t("teststyle.table.value")}</td>
          </tr>
          <tr>
            <td>{t("teststyle.table.value")}</td>
            <td>{t("teststyle.table.value")}</td>
          </tr>
        </tbody>
      </table>
      <div className="timeline">
        <Timeline
          datetime={t("teststyle.timeline")}
          content=".timeline&gt;.timeline-item+&gt;{.timeline-dot, .timeline-date, .timeline-content&gt;p}"
        />
      </div>
    </>
  )
}

export default Styletest
