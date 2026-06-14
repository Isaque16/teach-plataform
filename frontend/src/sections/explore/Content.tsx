import planeIcon from "../../assets/icons/plane.svg";
import LinkArrow from "../../components/LinkArrow.tsx";

export default function ExploreContent() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <h2 id="explore-heading" className="font-title text-2xl md:text-6xl">
        Meet{" "}
        <span className="relative inline-block">
          international
          <span className="absolute -top-5 right-4 md:-top-15 pointer-events-none">
            <img
              role="presentation"
              src={planeIcon}
              alt=""
              aria-hidden="true"
              width={64}
              height={64}
              className="w-[24px] h-[24px] md:w-[64px] md:h-[64px]"
            />
          </span>
        </span>{" "}
        students & teachers
      </h2>
      <p className="font-text text-lg md:text-xl my-10 leading-[160%]">
        Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
        risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
        facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
        aenean lorem faucibus integer.
      </p>
      <LinkArrow
        link="/explore-community"
        text="Explore teachers and students"
      />
    </div>
  );
}
