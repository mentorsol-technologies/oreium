interface StatusBadgeProps {
  status: 'completed' | 'pending' | 'paid' | 'unpaid' | 'verified' | string;
  label?: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    completed: 'border-[#419F75] text-[#419F75] bg-[#419F75]/10',
    paid: 'border-[#419F75] text-[#419F75] bg-[#419F75]/10',
    pending: 'border-[#FC0] text-[#FC0] bg-[#FC0]/10',
    unpaid: 'border-[#FC0] text-[#FC0] bg-[#FC0]/10',
    verified: 'border-[#419F75] text-[#419F75] bg-[#419F75]/10',
  };

  const labels: Record<string, string> = {
    completed: 'Completed',
    paid: 'Paid',
    pending: 'Pending',
    unpaid: 'unpaid',
    verified: 'Verified',
  };

  const badgeStyle = styles[status] || 'border-white/50 text-white/50 bg-white/5';
  const badgeLabel = label || labels[status] || status;

  return (
    <div className={`inline-flex px-[15px] py-1 justify-center items-center gap-2.5 rounded-[7px] border-[1.4px] ${badgeStyle}`}>
      <span className="text-center font-['Gotham'] text-base font-light leading-normal">
        {badgeLabel}
      </span>
    </div>
  );
}
