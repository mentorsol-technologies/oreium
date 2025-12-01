
"use client"
import { StatementsTable, TransactionsTable } from '@/components/Activity';
import { Tabs } from '@/components/Tabs';
import { useState } from 'react';

export default function Activity() {
    const [activeTab, setActiveTab] = useState<'transactions' | 'statements'>('transactions');

    const tabs = [
        { id: 'transactions', label: 'Transactions' },
        { id: 'statements', label: 'Statements & Fees' },
    ];

    return (
        <div className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="mb-6">
                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={(tabId) => setActiveTab(tabId as 'transactions' | 'statements')}
                    className="w-full max-w-[412px]"
                />
            </div>

            {activeTab === 'transactions' ? (
                <TransactionsTable />
            ) : (
                <StatementsTable />
            )}
        </div>
    );
}
