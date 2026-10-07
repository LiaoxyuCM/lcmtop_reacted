import type { ReactNode } from 'react';
import Icons from './icons';
import { useState, useRef } from 'react';
import './css/components.scss';

interface BaseCardProps {
  title: string;
  content: string;
  link: string;
  targetblank?: boolean
}

interface CardProps extends BaseCardProps {
  iconAttach?: ReactNode;
  visible?: boolean;
}

export function Card({ title, iconAttach, content, link, visible = true, targetblank = false }: CardProps) {
  return (
    <a
      href={link || "#"}
      onClick={
        link ?
          void 0 :
          (e) => { e.preventDefault() }
      }
      target={targetblank ? "_blank" : ""}
      style={{ display: visible ? "block" : "none" }}
    >
      <div className="card">
        <h3>{title}{iconAttach}</h3>
        <p className="description">
          {content}
        </p>
      </div>
    </a>
  )
}

interface CardFriendLinkProps extends BaseCardProps {
  imagesrc: string
}

export function CardFriendLink({ title, content, link, imagesrc, targetblank = true }: CardFriendLinkProps) {
  return (
    <a
      href={link ? link : "#"}
      onClick={
        link ?
          () => { } :
          (e) => { e.preventDefault() }
      }
      target={targetblank ? "_blank" : ""}
    >
      <div className="card">
        <img src={imagesrc} style={{ width: 40 + 'px', height: 40 + 'px', marginRight: 3 + 'px' }}></img>
        <div>
          <h3>{title}</h3>
          <p className="description">
            {content}
          </p>
        </div>
      </div>
    </a>
  )
}

interface TimelineProps {
  datetime: string,
  content: string
}

export function TimelineItem({ datetime, content }: TimelineProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{datetime}</div>
      <div className="timeline-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export function SelectBar(
  {
    choices,
    selectedIdx = 0,
    onChange
  }: {
    choices: string[],
    selectedIdx?: number,
    onChange?: (index: number) => void
  }
) {
  const [selectedIndex, chgSelIdx] = useState<number>(selectedIdx);

  return (
    <div className="selectbar">
      {choices.map((choice: string, index) => (
        <div
          className={"choice" + (selectedIndex == index ? " selected" : "")}
          key={index}
          onClick={() => {
            chgSelIdx(index);
            onChange?.(index);
          }}
        >
          {choice}
        </div>
      ))}
    </div>
  )
}

export function CodeField({ children }: { children: JSX.Element }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const items = Array.isArray(children) ? children : [children];
  const codeRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    try {
      const lines = codeRef.current?.querySelectorAll<HTMLElement>(".code") ?? [];
      const code = Array.from(lines)
        .map((el) => el.textContent ?? "")
        .join("\n");

      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="codefield">
      <div ref={codeRef}>
        {items.map((ln: JSX.Element, index: number) => (
          <div className="codeline" key={index}>
            <p className="codelnnumber">{index + 1}&nbsp;</p>
            <div className="code">{ln}</div>
          </div>
        ))}
      </div>
      <div className={`copybtn ${isCopied ? "copied" : ""}`} onClick={handleCopy}>
        {isCopied ? <Icons.Tick /> : <Icons.CopyBtn />}
      </div>
    </div>
  );
}

