import styles from './CustomTooltip.module.css';
import commonStyles from '../CommonStyles.module.css';
import type { TooltipContentProps } from 'recharts';

function CustomTooltip({ active, payload, label }: TooltipContentProps<string | number, string>) {
    if (!(active && payload && payload.length)) return null;

    const item = payload[0];
    const color = item.payload?.fill || undefined;

    console.log({
        active,
        label,
        payload,
    });

    return (
        <div className={styles.tooltip}>
            <div className={styles.tooltipLabel}>{label}</div>
            <ul className={styles.tooltipList}>
                {payload.map((p) => (
                    <li key={p.name} className={styles.tooltipItem}>
                        <span className={commonStyles.dot} style={{ background: p.fill || color }} />
                        <span className={commonStyles.series}>{p.name}</span>
                        <span className={commonStyles.value}>{p.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export {
    CustomTooltip
}