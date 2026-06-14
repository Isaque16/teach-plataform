import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets/icons/icon4.svg";
import icon5 from "../../assets/icons/icon5.svg";
import scratchIcon from "../../assets/elements/scratch.svg";
import playIcon from "../../assets/icons/play.svg";

export default function HeroContent() {
  const partnerCompanies = [
    { icon: icon1, name: "Partner 1" },
    { icon: icon2, name: "Partner 2" },
    { icon: icon3, name: "Partner 3" },
    { icon: icon4, name: "Partner 4" },
    { icon: icon5, name: "Partner 5" },
  ];

  return (
    <div className="w-full lg:w-[575px] flex flex-col">
      <h1 className="font-title text-4xl lg:text-7xl z-1">
        <span className="relative inline-block">
          <span className="absolute bottom-0 lg:-bottom-1 -right-0 pointer-events-none -z-1">
            <img
              role="presentation"
              src={scratchIcon}
              alt=""
              className="w-[100px] lg:w-[300px]"
              aria-hidden="true"
              width={100}
              height={100}
              loading="lazy"
            />
          </span>{" "}
          Teach
        </span>{" "}
        students worldwide
      </h1>
      <p className="my-8 lg:my-10 font-text text-lg lg:text-2xl leading-[160%]">
        Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
        tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
        ultricies.
      </p>
      <div className="flex gap-8">
        <a
          href="/signup"
          className="py-3 px-8 rounded-lg bg-orange-strong hover:bg-orange-700 focus:bg-orange-700 text-white text-xl font-text lg:font-semibold transition-colors duration-300"
        >
          Sign Up Now
        </a>
        <a
          href="/demo"
          className="inline-flex gap-4 items-center link-hover text-lg font-semibold text-sky-600 hover:text-sky-700"
        >
          <img
            src={playIcon}
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            loading="lazy"
          />{" "}
          View Demo
        </a>
      </div>
      <div className="my-6 lg:my-10 lg:mt-18 flex flex-col lg:flex-row gap-4 lg:gap-10">
        <p className="text-blue-gray">
          Trusted by
          <br className="hidden lg:block" />
          leading companies
        </p>
        <div className="flex gap-6">
          {partnerCompanies.map((company, index) => (
            <img
              key={index}
              src={company.icon}
              alt={company.name}
              width={25}
              height={25}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
