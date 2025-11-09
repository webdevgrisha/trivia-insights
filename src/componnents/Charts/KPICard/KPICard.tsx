import styles from "./KPICard.module.css";

interface KPICardProps {
    name: string;
    value?: number;
    locale?: string;
    fractionDigits?: number;
};

function KPICard({
    name,
    value,
    locale,
    fractionDigits = 0,
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
        <div className={`${styles.card}`}>
            <span className={styles.name}>{name}</span>
            <span className={styles.value}>{formatted}</span>
        </div>
    );
}

export { KPICard };
