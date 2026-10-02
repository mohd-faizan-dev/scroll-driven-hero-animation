
const stats = [
  {
    number: "98%",
    label: "Client satisfaction",
  },
  {
    number: "85%",
    label: "Digital growth",
  },
  {
    number: "120+",
    label: "Projects delivered",
  },
];

export default function Stats() {
  return (
    <div className="stats-container mt-10 flex gap-7 md:mt-14 md:gap-16">
      {stats.map((stat) => (
        <div
          className="stat-item flex flex-col gap-2"
          key={stat.label}
        >
          <strong className="text-2xl font-medium tracking-[-0.05em] md:text-4xl">
            {stat.number}
          </strong>

          <span className="text-[7px] uppercase tracking-[0.2em] text-white/30 md:text-[9px]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

