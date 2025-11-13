export const formatDateEvent = (isoDate?: string) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  const day = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    date
  );
  const dayNum = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  const time = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day}. ${dayNum} ${month} · ${time}`;
};
