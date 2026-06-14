import HeroContent from "./Content.tsx";
import HeroImages from "./Images.tsx";

export default function Hero() {
  return (
    <header className="flex flex-col lg:flex-row lg:justify-around items-center overflow-x-hidden py-8 lg:py-16">
      <HeroContent />
      <HeroImages />
    </header>
  );
}
