import { useState } from "react";
import { IActivities } from "../../utils/interfaces";

interface IActivityCard extends IActivities {
  index: number;
}

export function ActivityCard({ id, icon, title, description, link, hiddenText, short, index }: IActivityCard) {
  // null until the first click, so the spin only plays after the user interacts
  const [open, setOpen] = useState<boolean | null>(null);
  const detailsId = `activity-details-${id}`;
  const stateClass = open === null ? "" : open ? " is-open" : " is-closed";

  return (
    <div className={`activity-item${stateClass}`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="activity-content">
        <div className="activity-icon" aria-hidden="true">{icon}</div>
        <h3 className="activity-title">
          {/* Stretched over the whole card (CSS), so clicking anywhere on it toggles */}
          <button
            type="button"
            className="activity-toggle"
            aria-expanded={!!open}
            aria-controls={detailsId}
            onClick={() => setOpen(!open)}
          >
            {title}
          </button>
        </h3>
        {/* Expand badge: the plus turns into an × when open (screen readers get aria-expanded) */}
        <p className="activity-hint" aria-hidden="true">➕</p>
        <div id={detailsId} className="activity-details">
          <div className="activity-details-inner">
            <p className="activity-description">{description}</p>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="activity-link">
                {short ? "Let's Connect" : "Check it"}
                <span className="screen-reader-element">&nbsp; {hiddenText}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
