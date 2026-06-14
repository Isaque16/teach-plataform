import manBlue from "../../assets/images/join-cta/man-blue.webp";
import man1 from "../../assets/images/join-cta/man1.webp";
import clickIcon from "../../assets/icons/click.svg";
import cartIcon from "../../assets/icons/cart.svg";
import asyncIcon from "../../assets/icons/async.svg";
import woman2 from "../../assets/images/join-cta/woman2.webp";
import notificationIcon from "../../assets/icons/notfication.svg";
import bagIcon from "../../assets/icons/bag.svg";
import girl2 from "../../assets/images/join-cta/girl2.webp";
import girl1 from "../../assets/images/join-cta/girl1.webp";
import woman1 from "../../assets/images/join-cta/woman1.webp";

export default function RightIconsGroup() {
  return (
    <div className="w-full lg:w-2/5 mb-40 lg:my-auto relative">
      <img
        role="presentation"
        src={manBlue}
        alt=""
        aria-hidden="true"
        width={45}
        height={45}
        loading="lazy"
        className="w-[45.1px] rounded-full object-cover aspect-square absolute top-0 lg:-top-50 left-0 lg:-left-10"
      />
      <img
        role="presentation"
        src={man1}
        alt=""
        aria-hidden="true"
        width={39}
        height={39}
        loading="lazy"
        className="w-[38.7px] rounded-full object-cover aspect-square absolute top-28 lg:top-40 left-8 lg:-left-10"
      />
      <img
        role="presentation"
        src={clickIcon}
        alt=""
        aria-hidden="true"
        width={47}
        height={47}
        loading="lazy"
        className="w-[46.5px] absolute top-8 lg:-top-20 left-15 lg:left-5"
      />
      <img
        role="presentation"
        src={cartIcon}
        alt=""
        aria-hidden="true"
        width={26}
        height={26}
        loading="lazy"
        className="w-[25.8px] absolute top-25 lg:top-40 left-28 lg:left-30"
      />
      <img
        role="presentation"
        src={asyncIcon}
        alt=""
        aria-hidden="true"
        width={39}
        height={39}
        loading="lazy"
        className="w-[38.7px] absolute top-2 lg:-top-40 left-40 lg:left-30"
      />
      <img
        role="presentation"
        src={woman2}
        alt=""
        aria-hidden="true"
        width={52}
        height={52}
        loading="lazy"
        className="w-[51.6px] rounded-full object-cover aspect-square absolute top-15 lg:-top-15 right-42 lg:right-25"
      />
      <img
        role="presentation"
        src={notificationIcon}
        alt=""
        aria-hidden="true"
        width={39}
        height={39}
        loading="lazy"
        className="w-[38.7px] absolute top-10 lg:-top-25 right-28 lg:right-0"
      />
      <img
        role="presentation"
        src={bagIcon}
        alt=""
        aria-hidden="true"
        width={39}
        height={39}
        loading="lazy"
        className="w-[38.7px] absolute top-30 lg:top-10 right-33 lg:right-25"
      />
      <img
        role="presentation"
        src={girl2}
        alt=""
        aria-hidden="true"
        width={26}
        height={26}
        loading="lazy"
        className="w-[25.81px] rounded-full object-cover aspect-square absolute top-35 lg:top-45 right-20 lg:-right-5"
      />
      <img
        role="presentation"
        src={girl1}
        alt=""
        aria-hidden="true"
        width={59}
        height={59}
        loading="lazy"
        className="w-[58.8px] lg:w-[96px] rounded-full object-cover aspect-square absolute top-0 lg:-top-65 right-5 lg:-right-10"
      />
      <img
        role="presentation"
        src={woman1}
        alt=""
        aria-hidden="true"
        width={73}
        height={73}
        loading="lazy"
        className="w-[73.45px] lg:w-[100px] rounded-full object-cover aspect-square absolute top-20 lg:top-0 right-0 lg:-right-28"
      />
    </div>
  );
}
