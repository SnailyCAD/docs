import * as React from "react";
import { Widget } from "@happyreact/react";
import "@happyreact/react/theme.css";
import styles from "./styles.module.css";

export function Feedback({ resource }) {
  const [hasReacted, setHasReacted] = React.useState(false);
  const _resource = String(resource).replace(/\//g, "-");

  const handleReaction = (params) => {
    setHasReacted(params.icon);
  };

  return (
    <div className={styles.root}>
      <h3>Was this page helpful?</h3>
      <div>
        {hasReacted ? (
          <p>Thank you for your feedback!</p>
        ) : (
          <Widget
            classes={{
              root: styles.widget,
              container: styles.container,
              grid: styles.grid,
              cell: styles.cell,
              reaction: styles.reaction,
              reactionIcon: styles.reactionIcon,
            }}
            token="be34e5da-46fc-4dc5-a5a1-377ee410357f"
            resource={_resource}
            onReaction={handleReaction}
          />
        )}
      </div>
    </div>
  );
}
