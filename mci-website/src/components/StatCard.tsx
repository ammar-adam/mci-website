interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  // Split value like "100K+" into "100", "K", "+"
  const match = value.match(/^(\d+)([A-Z]*)([+]*)$/);
  const num = match?.[1] ?? value;
  const unit = match?.[2] ?? '';
  const plus = match?.[3] ?? '';

  return (
    <div className="bg-[#111318] border border-white/5 rounded-2xl p-6">
      <p className="text-4xl font-bold text-[#F4F7FB] leading-none">
        {num}
        {unit && <span className="text-[#EE353D]">{unit}</span>}
        {plus && <span className="text-[#EE353D]">{plus}</span>}
      </p>
      <p className="mt-2 text-sm text-[#8A8FA8]">{label}</p>
    </div>
  );
}
