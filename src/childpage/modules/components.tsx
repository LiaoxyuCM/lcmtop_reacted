import type { ReactNode } from 'react';
import { useState } from 'react';
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
      href={link ? link : "#"}
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

interface CardFriendlyLinkProps extends BaseCardProps {
  imagesrc: string
}

export function CardFriendlyLink({ title, content, link, imagesrc, targetblank = true }: CardFriendlyLinkProps) {
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

export function Timeline({ datetime, content }: TimelineProps) {
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

export function SelectBar({ choices, selectedIdx = 0 }: { choices: string[], selectedIdx?: number }) {
  const [selectedIndex, chgSelIdx] = useState<number>(selectedIdx);

  return (
    <div className="selectbar">
      {choices.map((choice, index) => (
        <div
          className={"choice" + (selectedIndex == index ? " selected" : "")}
          key={index}
          onClick={() => {
            chgSelIdx(index);
          }}
        >
          {choice}
        </div>
      ))}
    </div>
  )
}



