"use client"
import { ReactNode } from "react";

export interface TableColumn<T> {
  key: string;
  header: string;
  render?: (item: T, index: number) => ReactNode;
  className?: string;
  headerClassName?: string;
  minWidth?: string;
  noWrap?: boolean;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor: (item: T, index: number) => string | number;
  className?: string;
  emptyMessage?: string;
}

export function Table<T>({
  columns,
  data,
  keyExtractor,
  className = "",
  emptyMessage = "No data available",
}: TableProps<T>) {
  if (data.length === 0) {
    return (
      <div className={`w-full bg-[#202020] rounded-[10px] p-8 text-center ${className}`}>
        <span className="text-white/50 font-['Helvetica'] text-base">
          {emptyMessage}
        </span>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 ${className}`}>
      <div className="inline-block align-middle min-w-full">
        <div className="overflow-hidden rounded-[10px] border border-white/10">
          <table className="w-full border-collapse" style={{ minWidth: 'min(100%, 800px)' }}>
            <thead>
              <tr className="bg-[#202020]">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    style={column.minWidth ? { minWidth: column.minWidth } : undefined}
                    className={`
                      px-4 sm:px-6 py-4 sm:py-5 text-left
                      opacity-50 text-white font-['Helvetica'] text-sm sm:text-xl font-normal
                      border-b border-white/10
                      ${column.noWrap !== false ? 'whitespace-nowrap' : ''}
                      ${column.headerClassName || ""}
                    `}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#202020] divide-y divide-white/10">
              {data.map((item, rowIndex) => (
                <tr
                  key={keyExtractor(item, rowIndex)}
                  className="hover:bg-[#252525] transition-colors"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      style={column.minWidth ? { minWidth: column.minWidth } : undefined}
                      className={`
                        px-4 sm:px-6 py-3 sm:py-4
                        text-white font-['Helvetica'] text-sm sm:text-base font-normal
                        ${column.noWrap !== false ? 'whitespace-nowrap' : ''}
                        ${column.className || ""}
                      `}
                    >
                      {column.render ? column.render(item, rowIndex) : String((item as any)[column.key] || "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

