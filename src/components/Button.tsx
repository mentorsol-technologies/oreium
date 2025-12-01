"use client"
import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";
type IconPosition = "left" | "right" | "none";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    fullWidth?: boolean;
    children: ReactNode;
}

const variantStyles = {
    primary: "bg-[#BB984C] text-[#0D0A04] hover:opacity-90",
    secondary: "bg-[#161717] text-white hover:bg-[#2A2A2A]",
    outline: "border border-white text-white hover:bg-white/10",
    ghost: "bg-transparent text-white hover:bg-white/5",
    white: "bg-white text-[#0D0A04] hover:bg-gray-100",
};

const sizeStyles = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
};

export function Button({
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "none",
    fullWidth = false,
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "font-['Plus_Jakarta_Sans'] cursor-pointer font-medium transition-all rounded-full flex items-center justify-center gap-2";
    const widthStyle = fullWidth ? "w-full" : "";

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

    const renderContent = () => {
        if (iconPosition === "left" && icon) {
            return (
                <>
                    <span className="shrink-0">{icon}</span>
                    <span>{children}</span>
                </>
            );
        }
        if (iconPosition === "right" && icon) {
            return (
                <>
                    <span>{children}</span>
                    <span className="shrink-0">{icon}</span>
                </>
            );
        }
        return children;
    };

    return (
        <button className={combinedClassName} {...props}>
            {renderContent()}
        </button>
    );
}

