import FeaturesContent from "./Content.tsx";
import FeaturesImages from "./Images.tsx";

export default function Features() {
  return (
    <section
      id="features-section"
      className="flex flex-col items-center lg:flex-row lg:justify-between p-10 overflow-x-hidden"
      aria-labelledby="features-heading"
    >
      <FeaturesContent />
      <FeaturesImages />
    </section>
  );
}
