import React from "react";
import styles from "./Skeleton.module.css";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & { rounded?: "sm" | "md" | "lg" | "xl" };

function Skeleton({ className = "", rounded = "md", ...rest }: SkeletonProps) {
    return <div className={`${styles.skeleton} ${styles[rounded]} ${className}`} {...rest} />;
}

export {
    Skeleton
}