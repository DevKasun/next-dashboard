interface SummaryBoxProps {
  title: string;
  value: string | number;
}

export default function SummaryBox({ title, value }: SummaryBoxProps) {
  return (
    <div className="flex-1 bg-white rounded-[10px] p-6 shadow-1">
      <div className="summary-box__info">
        <h5 className="text-base pb-2">{title}</h5>
        <h3 className=" relative w-fit text-3xl font-medium after:block after:absolute bottom-0 left-0 after:w-full after:h-1 after:bg-kBlue">
          {value}
        </h3>
      </div>
    </div>
  );
}
