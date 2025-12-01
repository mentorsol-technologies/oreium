"use client"
import { ReactNode } from "react";

interface Tab {
    id: string;
    label: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
    className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className = "" }: TabsProps) {
    return (
        <div className={`flex items-center rounded-[10px]  overflow-hidden ${className}`}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`flex-1 py-2.5 px-4 text-center font-['Plus_Jakarta_Sans'] text-base font-medium transition-colors ${activeTab === tab.id
                            ? "bg-[#BB984C] text-black"
                            : "bg-[#202020] text-white"
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}


