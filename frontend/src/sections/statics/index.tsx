import heartIcon from "../../assets/icons/heart.svg";
import diamondIcon from "../../assets/icons/diamond.svg";
import hatIcon from "../../assets/icons/hat.svg";
import StatItem from "./StatItem.tsx";

export default function Statics() {
  const stats = [
    {
      icon: heartIcon,
      iconAlt: "Heart icon",
      value: "195",
      label: "user countries",
    },
    {
      icon: diamondIcon,
      iconAlt: "Diamond icon",
      value: "1M",
      label: "valued teachers",
    },
    {
      icon: hatIcon,
      iconAlt: "Graduation cap icon",
      value: "17M",
      label: "happy students",
    },
  ];

  return (
    <section
      id="statistics-section"
      className="py-12 md:py-16 flex flex-col content-around md:flex-row md:justify-around gap-10 bg-dark-blue text-yellow-strong"
      aria-labelledby="statistics-heading"
    >
      <h2 id="statistics-heading" className="sr-only">
        Statistics about our platform
      </h2>

      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          iconAlt={stat.iconAlt}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </section>
  );
}
