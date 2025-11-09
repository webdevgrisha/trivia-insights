import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    type PieLabelRenderProps,
} from "recharts";
import styles from "./StatusPieChart.module.css";
import { CustomLegend, CustomTooltip, NoData } from "../common";
import type { PieInfo } from "../../Statistic/types/interfaces";

interface StatusPieChartProps {
    data: PieInfo[];
    isAnimationActive?: boolean;
}

function StatusPieChart({
    data,
    isAnimationActive = true,
}: StatusPieChartProps) {
    const safeData = Array.isArray(data) ? data.filter(d => (d?.value ?? 0) > 0) : [];

    if (safeData.length === 0) return <NoData />;

    const renderPctOnly = ({ percent }: PieLabelRenderProps) =>
        `${(Number(percent ?? 0) * 100).toFixed(1)}%`;

    return (
        <div className={styles.chartWrap}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Legend
                        content={<CustomLegend />}
                        verticalAlign="top"
                        align="left"
                        height={32}
                        wrapperStyle={{ top: 8 }}
                    />
                    <Tooltip content={CustomTooltip} cursor={{ fillOpacity: 0.9 }} />
                    <Pie
                        data={safeData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="60%"
                        outerRadius="80%"
                        cornerRadius={10}
                        paddingAngle={4}
                        isAnimationActive={isAnimationActive}
                        animationDuration={240}
                        label={renderPctOnly}
                        labelLine={false}
                    >
                        {safeData.map((d, i) => (
                            <Cell key={`${d.name}-${i}`} fill={d.fill} stroke="var(--border)" strokeWidth={1} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export { StatusPieChart };
