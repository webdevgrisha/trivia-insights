import styles from './CustomXTick.module.css';

function CustomXTick({
    x, y, payload,
}: { x: number; y: number; payload: { value: string } }) {
    const label = String(payload.value ?? "");
    const short = label.length > 16 ? label.slice(0, 15) + "…" : label;
    return (
        <g transform={`translate(${x},${y})`} style={{ pointerEvents: "none" }}>
            <text
                className={styles.xTick}
                textAnchor="end"
                transform="rotate(-45)"
                dy={8}
            >
                {short}
            </text>
        </g>
    );
}

export {
    CustomXTick
}