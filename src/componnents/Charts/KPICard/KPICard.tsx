import styles from "./KPICard.module.css";

interface KPICardProps {
    name: string;
    value?: number;
    locale?: string;
    fractionDigits?: number;
    isActive?: boolean;
    onClick?: () => void;
};

function KPICard({
    name,
    value,
    locale,
    fractionDigits = 0,
    isActive = false,
    onClick,
}: KPICardProps) {
    const hasValue = value !== null && value !== undefined && !Number.isNaN(value);

    const formatted = hasValue
        ? new Intl.NumberFormat(locale, {
            style: "decimal",
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits,
            useGrouping: true,
        }).format(value as number)
        : "—";

    return (
        <button
            type="button"
            className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
            onClick={onClick}
        >
            <span className={styles.name}>{name}</span>
            <span className={styles.value}>{formatted}</span>
        </button>
    );
}

export { KPICard };
