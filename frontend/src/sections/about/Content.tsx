import scratch from "../../assets/elements/scratch.svg";
import check from "../../assets/icons/check.svg";
import LinkArrow from "../../components/LinkArrow.tsx";

export default function AboutContent() {
  return (
    <div className="w-full lg:w-2/5 flex flex-col justify-center items-start">
      <h2 id="about-heading" className="font-title text-2xl lg:text-6xl z-1">
        An{" "}
        <span className="relative inline-block">
          <span className="absolute -bottom-0 lg:-bottom-3 -right-0 pointer-events-none -z-1">
            <img
              role="presentation"
              src={scratch}
              alt=""
              aria-hidden="true"
              width={270}
              height={80}
              className="w-[150px] lg:w-[270px]"
              loading="lazy"
            />
          </span>{" "}
          all-in-one
        </span>{" "}
        app that makes it easier
      </h2>
      <p className="block lg:hidden mt-5 font-text text-lg">
        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
        suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
        amet, dui sit suspendisse.
      </p>
      <ul className="my-10 flex flex-col gap-5 text-lg">
        <li className="flex items-baseline gap-3">
          <img
            role="presentation"
            src={check}
            alt=""
            aria-hidden="true"
            width={15}
            height={15}
          />{" "}
          Est et in pharetra magna adipiscing ornare aliquam.
        </li>
        <li className="flex items-baseline gap-3">
          <img
            role="presentation"
            src={check}
            alt=""
            aria-hidden="true"
            width={15}
            height={15}
          />{" "}
          Tellus arcu sed consequat ac velit ut eu blandit.
        </li>
        <li className="flex items-baseline gap-3">
          <img
            role="presentation"
            src={check}
            alt=""
            aria-hidden="true"
            width={15}
            height={15}
          />{" "}
          Ullamcorper ornare in et egestas dolor orci.
        </li>
      </ul>
      <LinkArrow link="/about-app" text="Find more about the app" />
    </div>
  );
}
