import ExploreContent from "./Content.tsx";
import ExploreImages from "./Images.tsx";

export default function Explore() {
  return (
    <section
      id="explore-section"
      className="flex flex-col-reverse items-center lg:flex-row lg:justify-between"
      aria-labelledby="explore-heading"
    >
      <ExploreImages />
      <ExploreContent />
    </section>
  );
}
