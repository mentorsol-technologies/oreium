import { Table, TableColumn } from '@/components/Table';
import { StatusBadge } from './StatusBadge';

export interface Transaction {
  id: number;
  dateTime: string;
  amount: string;
  usdValue: string;
  usdAmount: string;
  status: 'completed' | 'pending';
  type: 'buy' | 'sell';
}

const mockTransactions: Transaction[] = [
  {
    id: 1,
    dateTime: 'April,09,2020,5:42:44 AM',
    amount: '77.7588g',
    usdValue: '$1,024',
    usdAmount: '$50.00',
    status: 'completed' as const,
    type: 'sell' as const,
  },
  {
    id: 2,
    dateTime: 'April,09,2020,5:42:44 AM',
    amount: '32.0987g',
    usdValue: '$1,024',
    usdAmount: '$50.00',
    status: 'pending' as const,
    type: 'buy' as const,
  },
  {
    id: 3,
    dateTime: 'April,09,2020,5:42:44 AM',
    amount: '155.0987g',
    usdValue: '$1,024',
    usdAmount: '$50.00',
    status: 'completed' as const,
    type: 'sell' as const,
  },
  {
    id: 4,
    dateTime: 'April,09,2020,5:42:44 AM',
    amount: '155.0987g',
    usdValue: '$1,024',
    usdAmount: '$50.00',
    status: 'completed' as const,
    type: 'sell' as const,
  },
  {
    id: 5,
    dateTime: 'April,09,2020,5:42:44 AM',
    amount: '77.7588g',
    usdValue: '$1,024',
    usdAmount: '$50.00',
    status: 'completed' as const,
    type: 'sell' as const,
  },
  {
    id: 6,
    dateTime: 'April,09,2020,5:42:44 AM',
    amount: '32.0987g',
    usdValue: '$1,024',
    usdAmount: '$50.00',
    status: 'pending' as const,
    type: 'buy' as const,
  },
  {
    id: 7,
    dateTime: 'April,09,2020,5:42:44 AM',
    amount: '155.0987g',
    usdValue: '$1,024',
    usdAmount: '$50.00',
    status: 'completed' as const,
    type: 'sell' as const,
  },
  {
    id: 8,
    dateTime: 'April,09,2020,5:42:44 AM',
    amount: '155.0987g',
    usdValue: '$1,024',
    usdAmount: '$50.00',
    status: 'completed' as const,
    type: 'sell' as const,
  },
];

export function TransactionsTable() {
  const columns: TableColumn<Transaction>[] = [
    {
      key: 'dateTime',
      header: 'Date & Time',
      minWidth: '180px',
    },
    {
      key: 'amount',
      header: 'Amount',
      minWidth: '100px',
    },
    {
      key: 'usdValue',
      header: 'USD Value',
      minWidth: '110px',
    },
    {
      key: 'usdAmount',
      header: 'USD Amount',
      minWidth: '120px',
    },
    {
      key: 'status',
      header: 'Status',
      minWidth: '120px',
      render: (transaction) => <StatusBadge status={transaction.status} />,
    },
    {
      key: 'actions',
      header: '',
      minWidth: '100px',
      noWrap: false,
      render: (transaction) => (
        <div className="flex items-center justify-end gap-3">
          <span
            className={`font-['Helvetica'] text-sm sm:text-base font-normal whitespace-nowrap ${transaction.type === 'buy' ? 'text-[#419F75]' : 'text-[#FC0]'
              }`}
          >
            {transaction.type === 'buy' ? 'Buy' : 'Sell'}
          </span>
          <button className="opacity-80 hover:opacity-100 transition-opacity flex-shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 2.5712V21.4288C24 22.1107 23.7291 22.7647 23.2469 23.2469C22.7647 23.7291 22.1107 24 21.4288 24H2.5712C1.88928 24 1.23528 23.7291 0.753087 23.2469C0.270894 22.7647 0 22.1107 0 21.4288L0 2.5712C0 1.88928 0.270894 1.23528 0.753087 0.753087C1.23528 0.270894 1.88928 0 2.5712 0H21.4288C22.1107 0 22.7647 0.270894 23.2469 0.753087C23.7291 1.23528 24 1.88928 24 2.5712ZM19.2864 3.4288H13.28C13.0244 3.426 12.7739 3.49978 12.5606 3.64064C12.3473 3.78149 12.1811 3.98296 12.0833 4.21911C11.9856 4.45526 11.9607 4.71527 12.0121 4.96565C12.0634 5.21604 12.1884 5.44533 12.3712 5.624L14.0912 7.3376L3.6176 17.8112C3.55761 17.8707 3.51 17.9415 3.47751 18.0195C3.44502 18.0975 3.42829 18.1811 3.42829 18.2656C3.42829 18.3501 3.44502 18.4337 3.47751 18.5117C3.51 18.5897 3.55761 18.6605 3.6176 18.72L5.28 20.3824C5.3395 20.4424 5.41028 20.49 5.48827 20.5225C5.56626 20.555 5.64991 20.5717 5.7344 20.5717C5.81889 20.5717 5.90254 20.555 5.98053 20.5225C6.05852 20.49 6.1293 20.4424 6.1888 20.3824L16.664 9.9072L18.3776 11.6208C18.5563 11.8036 18.7856 11.9286 19.0359 11.9799C19.2863 12.0313 19.5463 12.0064 19.7825 11.9087C20.0186 11.8109 20.2201 11.6447 20.361 11.4314C20.5018 11.2181 20.5756 10.9676 20.5728 10.712V4.72C20.5743 4.55043 20.5421 4.38225 20.478 4.22524C20.4139 4.06823 20.3193 3.92551 20.1996 3.80537C20.0799 3.68524 19.9376 3.59009 19.7808 3.52544C19.624 3.4608 19.456 3.42795 19.2864 3.4288Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2.5">
      <Table
        columns={columns}
        data={mockTransactions}
        keyExtractor={(transaction) => transaction.id}
      />
      <button className="mt-3 mx-auto w-full max-w-[250px] h-10 rounded border border-white/50 hover:border-white transition-colors">
        <span className="text-white font-['Helvetica'] text-xs">Load More</span>
      </button>
    </div>
  );
}
