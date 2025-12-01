"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/SideBar";
import { Header } from "@/components/Header";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

function getPageTitle(pathname: string): string {
    const routeMap: Record<string, string> = {
        "/": "Dashboard",
        "/transact": "Transact",
        "/vault": "Vault",
        "/portfolio": "Portfolio",
        "/settings": "Settings",
        "/activity": "Activity",
        "/audit": "Audit",
        "/invite": "Invite",
        "/user-management": "User Management",
    };

    // Check exact match first
    if (routeMap[pathname]) {
        return routeMap[pathname];
    }

    // Check if pathname starts with any route
    for (const [route, title] of Object.entries(routeMap)) {
        if (pathname.startsWith(route) && route !== "/") {
            return title;
        }
    }

    // Default to "Vault" if no match
    return "Vault";
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const pageTitle = getPageTitle(pathname || "/");

    return (
        <div className="min-h-screen bg-[#161717] flex">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 lg:ml-[345px] w-full min-w-0 flex flex-col">
                <Header
                    sidebarOpen={sidebarOpen}
                    onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
                    title={pageTitle}
                />
                <main className="flex-1 w-full overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

