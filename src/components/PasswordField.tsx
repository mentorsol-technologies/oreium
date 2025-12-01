"use client"
import { useState } from "react";

interface PasswordFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    className?: string;
}

export default function PasswordField({
    value,
    onChange,
    placeholder = "•••••••••••",
    label,
    className = "",
}: PasswordFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && (
                <label className="text-sm leading-[140%] tracking-[-0.28px] text-[#A1A1A1]">
                    {label}
                </label>
            )}
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-[#3A3B3F] bg-[#2A2A2A] min-h-[48px]">
                <input
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    className="flex-1 bg-transparent text-white text-base leading-[150%] outline-none placeholder:text-gray-400"
                    placeholder={placeholder}
                    autoComplete="off"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="w-6 h-6 flex items-center justify-center shrink-0 cursor-pointer"
                >
                    {showPassword ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                                stroke="#A1A1A1"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                stroke="#A1A1A1"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.00006 4L20.0001 20M14.0001 14.2361C13.4693 14.7111 12.7684 15 12.0001 15C10.3432 15 9.00006 13.6569 9.00006 12C9.00006 11.2316 9.28891 10.5308 9.76395 10M19.6078 15.6077C20.1792 15.1103 20.6903 14.6099 21.1304 14.1469C22.29 12.9268 22.29 11.0732 21.1304 9.8531C19.1746 7.79533 15.8156 5 12.0001 5C11.1087 5 10.2422 5.15256 9.41276 5.41264M6.50006 6.80338C5.0415 7.73444 3.7977 8.87678 2.86977 9.8531C1.71016 11.0732 1.71016 12.9268 2.86977 14.1469C4.82555 16.2047 8.18455 19 12.0001 19C13.8681 19 15.6268 18.3299 17.1649 17.4044"
                                stroke="#A1A1A1"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}

