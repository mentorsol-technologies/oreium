"use client"
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    children: ReactNode;
    className?: string;
    padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export function Card({ children, className = "", padding = "md" }: CardProps) {
    return (
        <div className={cn(
            "bg-[#202020] rounded-[20px]",
            paddingStyles[padding],
            className
        )}>
            {children}
        </div>
    );
}

