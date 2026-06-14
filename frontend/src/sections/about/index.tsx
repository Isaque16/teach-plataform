import AboutContent from "./Content.tsx";
import AboutImages from "./Images.tsx";

export default function About() {
  return (
    <section
      id="about-section"
      className="h-[1100px] lg:h-[706px] flex flex-col lg:flex-row justify-between overflow-x-hidden"
      aria-labelledby="about-heading"
    >
      <AboutContent />
      <AboutImages />
    </section>
  );
}
