interface SummaryBoxProps {
  title: string;
  value: string | number;
}

export default function SummaryBox({ title, value }: SummaryBoxProps) {
  return (
    <div className="flex-1 bg-white rounded-[10px] p-6 shadow-1">
      <div className="summary-box__info">
        <h5 className="text-base pb-2">{title}</h5>
        <h3 className="text-3xl font-medium">{value}</h3>
        <div></div>
      </div>
    </div>
  );
}
