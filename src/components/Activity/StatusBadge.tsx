interface StatusBadgeProps {
  status: 'completed' | 'pending' | 'paid' | 'unpaid';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    completed: 'border-[#419F75] text-[#419F75]',
    paid: 'border-[#419F75] text-[#419F75]',
    pending: 'border-[#FC0] text-[#FC0]',
    unpaid: 'border-[#FC0] text-[#FC0]',
  };

  const labels = {
    completed: 'Completed',
    paid: 'Paid',
    pending: 'Pending',
    unpaid: 'unpaid',
  };

  return (
    <div className={`inline-flex px-[15px] py-1 justify-center items-center gap-2.5 rounded-[7px] border-[1.4px] ${styles[status]}`}>
      <span className="text-center font-['Gotham'] text-base font-light leading-normal">
        {labels[status]}
      </span>
    </div>
  );
}
