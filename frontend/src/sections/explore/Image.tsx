import { memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExploreImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  index: number;
}

const ExploreImage = memo(
  ({ src, alt, width, height, className, index }: ExploreImageProps) => {
    const figureRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (!figureRef.current) return;

      gsap.set(figureRef.current, {
        autoAlpha: 0,
        y: -30,
      });

      gsap.to(figureRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: figureRef.current,
          start: "top 90%",
          once: true,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === figureRef.current) {
            trigger.kill();
          }
        });
      };
    }, [index]);

    return (
      <figure
        ref={figureRef}
        className={`shadow-md rounded-lg overflow-hidden ${className}`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          width={width}
          height={height}
          loading="lazy"
        />
      </figure>
    );
  },
);

export default ExploreImage;
