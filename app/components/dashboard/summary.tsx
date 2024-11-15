import SummaryBox from "./summary-box";

export default function Summary({}) {
  return (
    <div className="flex items-center gap-8">
      <SummaryBox title="Total expenses" value="$ 24,500" />
      <SummaryBox title="Monthly Average" value="$ 4,500" />
      <SummaryBox title="Active Categories" value="10" />
    </div>
  );
}
