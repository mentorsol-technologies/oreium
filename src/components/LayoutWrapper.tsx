"use client"
import { usePathname } from "next/navigation";
import { DashboardLayout } from "@/components/DashboardLayout";

interface LayoutWrapperProps {
    children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
    const pathname = usePathname();
    const isAuthRoute = pathname?.startsWith("/auth");

    if (isAuthRoute) {
        return <>{children}</>;
    }

    return <DashboardLayout>{children}</DashboardLayout>;
}

