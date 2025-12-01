"use client"
import { Table, TableColumn } from '@/components/Table';
import { Button } from '../Button';
import { DeleteIcon, Trash2 } from 'lucide-react';

interface User {
    id: string;
    founder: string;
    name: string;
    created: string;
    status: string;
}

const mockUsers: User[] = [
    {
        id: '1',
        founder: 'admin@oreium.com',
        name: 'Admin',
        created: '10, Oct, 2025',
        status: 'Super Admin',
    },
];

export function UsersTable() {
    const columns: TableColumn<User>[] = [
        {
            key: 'founder',
            header: 'Founder',
        },
        {
            key: 'name',
            header: 'Name',
        },
        {
            key: 'created',
            header: 'Created',
        },
        {
            key: 'status',
            header: 'Status',
            render: (user) => (
                <span className="inline-flex items-center px-3 py-1 rounded-md border border-[#10B981]/20 text-[#10B981] font-['Helvetica'] text-sm font-medium">
                    {user.status}
                </span>
            ),
        },
        {
            key: 'actions',
            header: 'Actions',
            render: (user) => (
                <div className="flex items-center gap-2">
                    <Button className="px-4 py-2 !bg-[#2B2B2B] text-white font-['Helvetica'] text-sm rounded-full !hover:bg-[#3B3B3B] transition-colors">
                        Remove Admin
                    </Button>
                    <Button iconPosition='left' icon={<Trash2 width={20} height={20} />} className="px-4 py-2 bg-[#FD5353] text-white font-['Helvetica'] text-sm rounded-full hover:bg-[#FD6363] transition-colors flex items-center gap-1.5">

                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                data={mockUsers}
                keyExtractor={(user) => user.id}
            />
        </div>
    );
}

