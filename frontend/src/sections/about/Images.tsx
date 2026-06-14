import blob from "../../assets/elements/blob_2.webp";
import aboutWindow from "../../assets/images/about/window.webp";
import PlanCard from "../../components/PlanCard.tsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutImages() {
  const containerRef = useRef(null);
  const blobRef = useRef(null);
  const windowRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    gsap.set([blobRef.current, windowRef.current], {
      autoAlpha: 0,
      y: 20,
    });

    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
      autoAlpha: 0,
      y: 15,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 25%",
        once: true,
      },
    });

    tl.to(blobRef.current, { autoAlpha: 1, y: 0, duration: 0.8 })
      .to(windowRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.4")

      .to(card1Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.2")
      .to(card2Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(card3Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full lg:w-1/2 flex">
      <img
        ref={blobRef}
        src={blob}
        alt=""
        aria-hidden="true"
        width={506}
        height={400}
        className="w-[506px] absolute -top-73 lg:-top-23 -left-20 lg:-left-30 z-10 transform rotate-45 lg:-rotate-0"
        loading="lazy"
      />
      <img
        ref={windowRef}
        src={aboutWindow}
        alt="App interface showing a lesson"
        width={700}
        height={500}
        className="w-[700px] absolute -top-50 lg:-top-15 -left-5 lg:left-6 z-20"
        loading="lazy"
      />
      <div
        ref={cardsContainerRef}
        className="w-full lg:w-auto flex items-end justify-end lg:justify-normal gap-4 z-30 lg:overflow-x-visible"
      >
        <div ref={card1Ref}>
          <PlanCard
            width="w-44 lg:w-56"
            plan="Featured"
            name="The map of mathematics"
            text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            link="/lessons/math-map"
          />
        </div>
        <div ref={card2Ref}>
          <PlanCard
            width="w-44 lg:w-56"
            plan="Popular"
            name="Design for how people think"
            text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
            link="/lessons/design-thinking"
          />
        </div>
        <div ref={card3Ref} className="hidden lg:block">
          <PlanCard
            width="w-44 lg:w-56"
            plan="New"
            name="International &amp; commercial law"
            text="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui."
            link="/lessons/law-basics"
          />
        </div>
      </div>
    </div>
  );
}
