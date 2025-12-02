"use client"
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
    title: string;
    value: string | ReactNode;
    subtitle?: string;
    className?: string;
}

export function InfoCard({ title, value, subtitle, className = "" }: InfoCardProps) {
    return (
        <div className={cn(
            "bg-[#202020] rounded-[20px] p-6",
            className
        )}>
            <p className="text-white font-['Poppins'] text-sm mb-2">{title}</p>
            <div className="text-[#BB984C] font-['Poppins'] text-xl font-semibold mb-1">
                {value}
            </div>
            {subtitle && (
                <p className="text-[#717579] font-['Poppins'] text-sm">{subtitle}</p>
            )}
        </div>
    );
}

