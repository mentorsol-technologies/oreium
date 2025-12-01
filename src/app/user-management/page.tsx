"use client"
import { Tabs } from '@/components/Tabs';
import { useState } from 'react';
import { UsersTable } from '@/components/UserManagement/UsersTable';
import { AuditLogsTable } from '@/components/UserManagement/AuditLogsTable';

export default function UserManagement() {
    const [activeTab, setActiveTab] = useState<'user' | 'audit-logs'>('user');

    const tabs = [
        { id: 'user', label: 'User' },
        { id: 'audit-logs', label: 'Audit Logs' },
    ];

    return (
        <div className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="mb-6">
                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={(tabId) => setActiveTab(tabId as 'user' | 'audit-logs')}
                    className="w-full max-w-[412px]"
                />
            </div>

            {activeTab === 'user' ? (
                <UsersTable />
            ) : (
                <AuditLogsTable />
            )}
        </div>
    );
}

