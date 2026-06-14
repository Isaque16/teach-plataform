import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MessagesBubble() {
  const message1Ref = useRef<HTMLSpanElement>(null);
  const message2Ref = useRef<HTMLSpanElement>(null);
  const message3Ref = useRef<HTMLSpanElement>(null);
  const message4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.set(
      [
        message1Ref.current,
        message2Ref.current,
        message3Ref.current,
        message4Ref.current,
      ],
      {
        autoAlpha: 0,
        y: 10,
      }
    );

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(message1Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 })
      .to(message2Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "+=0.7")
      .to(message3Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "+=0.9")
      .to(message4Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "+=0.7")
      .to(
        [
          message1Ref.current,
          message2Ref.current,
          message3Ref.current,
          message4Ref.current,
        ],
        { autoAlpha: 0, y: -5, duration: 0.5, stagger: 0.2 },
        "+=1.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute flex flex-col gap-4 -top-3 lg:-top-25 left-18 lg:left-40 z-20">
      <div className="flex flex-col items-end gap-4 text-sm lg:text-lg text-black">
        <span
          ref={message1Ref}
          className="w-fit py-2 px-5 bg-white rounded-xl rounded-br-xs shadow-md"
        >
          Nunc, at libero neque
        </span>
        <span
          ref={message2Ref}
          className="w-fit py-2 px-5 bg-white rounded-xl rounded-br-xs shadow-md"
        >
          Viverra sed
        </span>
      </div>
      <div className="flex flex-col items-start gap-4 text-sm lg:text-lg text-white">
        <span
          ref={message3Ref}
          className="w-fit py-2 px-5 bg-blue-gray rounded-xl rounded-bl-xs shadow-md"
        >
          Turpis platea nunc mattis
        </span>
        <span
          ref={message4Ref}
          className="w-fit py-2 px-5 bg-blue-gray rounded-xl rounded-bl-xs shadow-md"
        >
          Vitae viverra ut non
        </span>
      </div>
    </div>
  );
}
