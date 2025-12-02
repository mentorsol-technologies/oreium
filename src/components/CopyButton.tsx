"use client"
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
    text: string;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export function CopyButton({ text, className = "", size = "md" }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const sizeStyles = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-10 h-10",
    };

    return (
        <button
            onClick={handleCopy}
            className={cn(
                "flex items-center justify-center rounded-full hover:bg-white/10 transition-colors",
                sizeStyles[size],
                className
            )}
            aria-label="Copy to clipboard"
        >
            {copied ? (
                <Check className="w-4 h-4 text-green-500" />
            ) : (
                <Copy className="w-4 h-4 text-[#717579]" />
            )}
        </button>
    );
}

