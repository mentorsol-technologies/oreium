"use client"
import { cn } from "@/lib/utils";

interface ProgressBarProps {
    value: number; // 0-100
    className?: string;
    barClassName?: string;
}

export function ProgressBar({ value, className = "", barClassName = "" }: ProgressBarProps) {
    const clampedValue = Math.min(Math.max(value, 0), 100);

    return (
        <div className={cn(
            "w-full h-2 bg-[#2B2B2B] rounded-full overflow-hidden",
            className
        )}>
            <div
                className={cn(
                    "h-full bg-primary transition-all duration-300 rounded-full",
                    barClassName
                )}
                style={{ width: `${clampedValue}%` }}
            />
        </div>
    );
}

