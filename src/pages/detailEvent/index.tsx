import DetailHeroBanner from "./components/DetailHeroBanner";
import EventInfoCard from "./components/EventInfoCard";
import EventSummaryCard from "./components/EventSummaryCard";

export default function DetailEvent() {
  return (
    <div>
      <DetailHeroBanner />
      <div className="flex">
        <EventInfoCard />
        <EventSummaryCard />
      </div>
    </div>
  );
}
