"use client"
import { InputHTMLAttributes } from "react";

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    name?: string;
}

export default function TextField({
    value,
    onChange,
    placeholder,
    label,
    className = "",
    name,
    type = "text",
    ...props
}: TextFieldProps) {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && (
                <label className="text-sm leading-[140%] tracking-[-0.28px] text-white">
                    {label}
                </label>
            )}
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-[#3A3B3F] bg-[#2A2A2A] min-h-[48px]">
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="flex-1 bg-transparent text-white text-base leading-[150%] outline-none placeholder:text-muted-foreground/50 placeholder:text-sm"
                    placeholder={placeholder}
                    {...props}
                />
            </div>
        </div>
    );
}

