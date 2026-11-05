import { ReactComponent as WorkIcon } from "../../assets/img/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/img/school.svg";
import { PatchCheckFill, RocketTakeoffFill } from "react-bootstrap-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import timelineElements from "./timelineElements";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

export default function Timeline() {
  return (
    <section id="timeline">
      <h2 className="title">My Timeline</h2>
      <p>Steps along the way</p>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWork = element.icon === "work";
          const buttonClass = `button ${isWork ? "workButton" : "schoolButton"}`;
          const links = [
            { href: element.href, text: element.buttonText, target: isWork ? "_self" : "_blank", hiddenText: element.hiddenText },
            { href: element.secondHref, text: element.secondButtonText, target: "_blank", hiddenText: element.secondHiddenText },
          ].filter((link) => link.href);

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconClassName={isWork ? "timeline-icon-work" : "timeline-icon-school"}
              icon={
                <OverlayTrigger placement="top" overlay={<Tooltip>{isWork ? "Career Event" : "Educational Event"}</Tooltip>}>
                  {/* Fills the whole circle, so hovering anywhere on the icon shows the tooltip */}
                  <span className="timeline-icon-hit" role="img" aria-label={isWork ? "Career event" : "Educational event"}>
                    {isWork ? <WorkIcon aria-hidden="true" /> : <SchoolIcon aria-hidden="true" />}
                  </span>
                </OverlayTrigger>
              }
            >
              {!isWork && (
                <span className={`timeline-status ${element.done ? "done" : "in-progress"}`}>
                  {element.done ? <PatchCheckFill aria-hidden="true" /> : <RocketTakeoffFill aria-hidden="true" />}
                  {element.done ? "Completed" : "In progress"}
                </span>
              )}
              <h3 className="vertical-timeline-element-title">{element.title}</h3>

              <div className="timeline-org">
                <p className="vertical-timeline-element-subtitle">{element.location}</p>
                {element.image && (
                  <img
                    alt={element.alt}
                    src={element.image}
                    className="timeline-image"
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>

              <p className="timeline-p">{element.description}</p>

              <div>
                {links.map((link) => (
                  <a
                    key={link.href}
                    target={link.target}
                    rel="noopener noreferrer"
                    className={buttonClass}
                    href={link.href}
                  >
                    {link.text}
                    {link.hiddenText && (
                      <span className="screen-reader-element">&nbsp; {link.hiddenText}</span>
                    )}
                  </a>
                ))}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
