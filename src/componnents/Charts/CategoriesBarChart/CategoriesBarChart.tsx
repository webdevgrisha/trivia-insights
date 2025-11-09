import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    type MouseHandlerDataParam,
    ReferenceArea,
} from "recharts";
import type { BarInfo, CategoryInfo } from "../../Statistic/types/interfaces";
import styles from "./CategoriesBarChart.module.css";
import { CustomLegend, CustomTooltip, CustomXTick, NoData } from "../common";
import React from "react";

interface CategoriesBarChartProps {
    barInfo: BarInfo[];
    data: CategoryInfo[];
    onClick: (id: string | null) => void;
    xKey?: keyof CategoryInfo;
}

function CategoriesBarChart({
    barInfo,
    data,
    onClick,
    xKey = "name",
}: CategoriesBarChartProps) {
    const [selectedXValue, setSelectedXValue] = React.useState<string | number | null>(null);
    const safeData = Array.isArray(data) ? data : [];

    if (!safeData.length) {
        return <NoData />
    }

    return (
        <div className={styles.chartWrap}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={safeData}
                    margin={{ top: 40, right: 8, bottom: 40, left: 8 }}
                    onClick={({ activeIndex }: MouseHandlerDataParam) => {
                        const selectedGroup = activeIndex !== null ? safeData[Number(activeIndex)] : null;

                        const categoryId = selectedGroup?.id || null;
                        const selectValue = selectedGroup?.[xKey] || null;

                        onClick(categoryId);
                        setSelectedXValue(selectValue)
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />

                    <Legend
                        content={<CustomLegend />}
                        verticalAlign="top"
                        align="left"
                        height={32}
                        wrapperStyle={{ top: 8 }}
                    />

                    <XAxis
                        dataKey={xKey as string}
                        interval={0}
                        height={64}
                        tickLine={false}
                        axisLine={{ stroke: "var(--border)" }}
                        tick={<CustomXTick x={0} y={0} payload={{ value: "" }} />}
                    />

                    <YAxis
                        tick={{ fill: "var(--muted)", fontSize: 12 }}
                        axisLine={{ stroke: "var(--border)" }}
                        tickLine={false}
                    />

                    <Tooltip content={CustomTooltip} cursor={{ fillOpacity: 0.15 }} />

                    {selectedXValue != null && (
                        <ReferenceArea
                            x1={selectedXValue}
                            x2={selectedXValue}
                            fillOpacity={0.15}
                        />
                    )}

                    {barInfo.map(({ dataKey, name, fill }) => (
                        <Bar
                            key={dataKey}
                            dataKey={dataKey}
                            name={name}
                            fill={fill}
                            radius={[6, 6, 0, 0]}
                            maxBarSize={48}
                            animationDuration={240}
                            isAnimationActive
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>

        </div >
    );
}

export { CategoriesBarChart };
