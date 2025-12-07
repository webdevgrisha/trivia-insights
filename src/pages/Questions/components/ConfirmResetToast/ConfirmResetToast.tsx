import styles from './ConfirmResetToast.module.css';

interface ConfirmResetToastProps {
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmResetToast({ onConfirm, onCancel }: ConfirmResetToastProps) {
  return (
    <div className={styles.toast}>
      <p className={styles.message}>Reset all saved answers?</p>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={onConfirm}
        >
          Yes
        </button>
        <button type="button" className={styles.button} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export { ConfirmResetToast };
