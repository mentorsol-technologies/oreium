import { Table, TableColumn } from '@/components/Table';
import { StatusBadge } from './StatusBadge';

export interface Statement {
  id: number;
  holdings: string;
  vaultingFee: string;
  dueDate: string;
  status: 'paid' | 'unpaid';
}

const mockStatements: Statement[] = [
  {
    id: 1,
    holdings: '11.0998 oz',
    vaultingFee: '$1,024',
    dueDate: 'Dec 1, 2025',
    status: 'unpaid' as const,
  },
  {
    id: 2,
    holdings: '11.0998 oz',
    vaultingFee: '$1,024',
    dueDate: 'Dec 1, 2025',
    status: 'paid' as const,
  },
];

export function StatementsTable() {
  const columns: TableColumn<Statement>[] = [
    {
      key: 'holdings',
      header: 'Holdings',
      minWidth: '120px',
    },
    {
      key: 'vaultingFee',
      header: 'Vaulting Fee',
      minWidth: '130px',
    },
    {
      key: 'dueDate',
      header: 'Due Date',
      minWidth: '120px',
    },
    {
      key: 'status',
      header: 'Status',
      minWidth: '120px',
      render: (statement) => <StatusBadge status={statement.status} />,
    },
    {
      key: 'actions',
      header: 'Actions',
      minWidth: '200px',
      noWrap: false,
      render: (statement) => (
        <div className="flex items-center gap-3 flex-wrap">
          <button className="inline-flex h-8 px-4 sm:px-6 justify-center items-center gap-2.5 rounded-[999px] bg-white hover:bg-white/90 transition-colors whitespace-nowrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L12 14M12 14L8 10M12 14L16 10"
                stroke="#0D0A04"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17"
                stroke="#0D0A04"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[#0D0A04] text-center font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium leading-[140%] hidden sm:inline">
              Download PDF
            </span>
            <span className="text-[#0D0A04] text-center font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium leading-[140%] sm:hidden">
              PDF
            </span>
          </button>

          {statement.status === 'unpaid' && (
            <button className="inline-flex h-8 px-4 sm:px-6 justify-center items-center gap-2.5 rounded-[999px] bg-[#BB984C] hover:bg-[#BB984C]/90 transition-colors whitespace-nowrap">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7.5V16.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6V2H18"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 7L22 2"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-black text-center font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium leading-[140%]">
                Pay $0.00
              </span>
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2.5">
      <Table
        columns={columns}
        data={mockStatements}
        keyExtractor={(statement) => statement.id}
      />
    </div>
  );
}
