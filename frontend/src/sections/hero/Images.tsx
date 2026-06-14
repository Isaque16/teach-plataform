import teacherImg from "../../assets/images/hero/teacher.webp";
import studentImg from "../../assets/images/hero/student.webp";
import cloudIcon from "../../assets/icons/cloud.svg";
import cubeIcon from "../../assets/icons/cube.svg";
import terminalIcon from "../../assets/icons/terminal.svg";
import MessagesBubble from "./BubbleMessages.tsx";

export default function HeroImages() {
  return (
    <div className="w-full lg:w-[624px] relative my-10 h-[350px]">
      <figure className="absolute -bottom-3 lg:-bottom-10 lg:left-10 z-10">
        <img
          src={teacherImg}
          alt="Teacher teaching throu the computer"
          className="w-44 lg:w-64"
          width={176}
          height={256}
          loading="eager"
        />
      </figure>
      <MessagesBubble />
      <figure className="absolute flex justify-end right-0 top-3 lg:-top-25 lg:-right-5 z-10">
        <img
          src={studentImg}
          alt="Student lookin at the phone"
          className="w-44 lg:w-64"
          width={176}
          height={256}
          loading="eager"
        />
      </figure>
      <div className="w-full absolute -bottom-5 lg:-bottom-5 right-25 lg:right-35 z-0">
        <div className="relative">
          <img
            role="presentation"
            src={cloudIcon}
            alt=""
            aria-hidden="true"
            className="w-[50px] lg:w-[60px] absolute bottom-15 -right-5"
            width={50}
            height={50}
            loading="lazy"
          />
          <img
            role="presentation"
            src={cubeIcon}
            alt=""
            aria-hidden="true"
            className="w-[60px] lg:w-[70px] absolute bottom-8 right-10 lg:right-16"
            width={60}
            height={60}
            loading="lazy"
          />
          <img
            role="presentation"
            src={terminalIcon}
            alt=""
            aria-hidden="true"
            className="w-[40px] lg:w-[50px] absolute bottom-0 -right-1"
            width={40}
            height={40}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
