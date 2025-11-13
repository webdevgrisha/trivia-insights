import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    type PieLabelRenderProps,
    Sector,
    type PieSectorDataItem,
} from "recharts";
import styles from "./StatusPieChart.module.css";
import { CustomLegend, CustomTooltip, NoData } from "../common";
import type { PieInfo } from "../../Statistic/types/interfaces";
import React from "react";

interface StatusPieChartProps {
    data: PieInfo[];
    onClick?: (key?: string | number) => void;
    isAnimationActive?: boolean;
}

function ActiveSector({ outerRadius, innerRadius, ...rest }: PieSectorDataItem) {
    return <Sector {...rest} outerRadius={(outerRadius + 2)} innerRadius={(innerRadius - 2)} fillOpacity={1} />;
}

function StatusPieChart({
    data,
    onClick,
    isAnimationActive = true,
}: StatusPieChartProps) {
    const safeData = Array.isArray(data) ? data.filter(d => (d?.value ?? 0) > 0) : [];

    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    if (safeData.length === 0) return <NoData />;

    const renderPctOnly = ({ percent }: PieLabelRenderProps) =>
        `${(Number(percent ?? 0) * 100).toFixed(1)}%`;

    return (
        <div className={styles.chartWrap}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart onClick={() => setActiveIndex(null)}>
                    <Legend
                        content={<CustomLegend />}
                        verticalAlign="top"
                        align="left"
                        height={32}
                        wrapperStyle={{ top: 8 }}
                    />
                    <Tooltip content={CustomTooltip} />
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
                        onClick={(_: PieSectorDataItem, index, e) => {
                            e?.stopPropagation();
                            onClick?.(safeData[index]?.key);
                            setActiveIndex(prev => (prev === index ? null : index));
                        }}
                        activeShape={ActiveSector}
                    >
                        {safeData.map((cellInfo, i) => {
                            const isActiveCell = activeIndex !== null;
                            const fillOpacity = isActiveCell && activeIndex !== i ? 0.6 : 1;

                            return (
                                <Cell
                                    key={`${cellInfo.key}`}
                                    fill={cellInfo.fill}
                                    stroke="var(--border)"
                                    strokeWidth={1}
                                    fillOpacity={fillOpacity}
                                />
                            )
                        })}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export { StatusPieChart };
