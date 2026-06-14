import scratchSvg from "../../assets/elements/scratch.svg";
import LinkArrow from "../../components/LinkArrow.tsx";

export default function FeaturesContent() {
  return (
    <div className="w-full lg:w-2/5 flex flex-col justify-center">
      <h2 id="features-heading" className="font-title text-2xl md:text-6xl z-1">
        All the cool{" "}
        <span className="relative inline-block">
          <span className="absolute -bottom-0 lg:-bottom-2 -right-0 pointer-events-none -z-1">
            <img
              role="presentation"
              src={scratchSvg}
              alt=""
              aria-hidden="true"
              className="w-[100px] lg:w-[300px]"
              width={100}
              height={100}
              loading="lazy"
            />
          </span>{" "}
          features
        </span>
      </h2>
      <p className="my-10 font-text text-lg lg:text-xl leading-[180%]">
        Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In
        et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque
        feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a,
        neque orci.
      </p>
      <LinkArrow link="/features" text="View all the features" />
    </div>
  );
}
