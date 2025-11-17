import React from 'react';
import styles from './StatusMessage.module.css';

interface StatusMessageProps {
  icon?: React.ReactNode;
  title: string;
  text?: string;
  role?: 'alert' | 'status';
  action?: React.ReactNode;
  className?: string;
}

export function StatusMessage({
  icon,
  title,
  text,
  role = 'status',
  action,
  className,
}: StatusMessageProps) {
  return (
    <div className={`${styles.state} ${className ?? ''}`} role={role}>
      <span className={styles.stateIcon} aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className={styles.stateTitle}>{title}</p>
        <p className={styles.stateText}>{text}</p>
      </div>
      <div className={styles.stateAction}>{action}</div>
    </div>
  );
}
