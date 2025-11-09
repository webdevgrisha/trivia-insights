import React from "react";
import styles from "./StatusMessage.module.css";

type StatusMessageProps = {
  icon?: React.ReactNode;
  title: string;
  text?: string;
  role?: "alert" | "status";
  action?: React.ReactNode;
};

export function StatusMessage({
  icon,
  title,
  text,
  role = "status",
  action,
}: StatusMessageProps) {
  return (
    <div className={styles.state} role={role}>
      {icon ? <span className={styles.stateIcon} aria-hidden="true">{icon}</span> : null}
      <div>
        <p className={styles.stateTitle}>{title}</p>
        {text ? <p className={styles.stateText}>{text}</p> : null}
      </div>
      {action ? <div className={styles.stateAction}>{action}</div> : null}
    </div>
  );
}
