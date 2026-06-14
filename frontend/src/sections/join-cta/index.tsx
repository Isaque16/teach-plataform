import LeftIconsGroup from "./LeftIconsGroup.tsx";
import CtaContent from "./Content.tsx";
import RightIconsGroup from "./RightIconsGroup.tsx";

export default function JoinCta() {
  return (
    <section
      id="join-cta-section"
      className="h-fit lg:h-[630px] flex flex-col lg:flex-row lg:justify-between bg-yellow-strong"
      aria-labelledby="join-heading"
    >
      <LeftIconsGroup />
      <CtaContent />
      <RightIconsGroup />
    </section>
  );
}
