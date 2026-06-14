import { useCallback, useEffect, useState } from "react";

import testimonial1Image from "../../assets/images/testimonials-slide/girl.webp";
import testimonial2Image from "../../assets/images/explore/studying.webp";
import testimonial3Image from "../../assets/images/explore/studying3.webp";
import balloonElement from "../../assets/elements/quote.webp";
import cubesElement from "../../assets/elements/squares.webp";

export default function TestimonialsSlide() {
  const testimonials = [
    {
      text: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
      name: "Marie Poirot",
      company: "Bigapp",
      image: testimonial1Image,
    },
    {
      text: "Fermentum ipsum eget mattis tincidunt magna amet cras ullamcorper. Lectus volutpat ultrices vitae ornare etiam accumsan sit purus in. Augue facilisis eget mi eu.",
      name: "Paul Smith",
      company: "TechEUR",
      image: testimonial2Image,
    },
    {
      text: "Amet vitae pellentesque suspendisse bibendum eget eget in. Risus nunc fermentum eu urna, turpis amet, consequat ut. Cursus id mauris volutpat integer ornare.",
      name: "Ana Santos",
      company: "DataCloud",
      image: testimonial3Image,
    },
    {
      text: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
      name: "Maria Fernanda",
      company: "TeachBR",
      image: testimonial1Image,
    },
    {
      text: "Fermentum ipsum eget mattis tincidunt magna amet cras ullamcorper. Lectus volutpat ultrices vitae ornare etiam accumsan sit purus in. Augue facilisis eget mi eu.",
      name: "John Doe",
      company: "TeachUSA",
      image: testimonial2Image,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const goToSlide = useCallback(
    (slideIndex: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(slideIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning],
  );

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setAutoplay(false);
    goToSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  }, [currentIndex, testimonials.length, isTransitioning, goToSlide]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    goToSlide(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, testimonials.length, isTransitioning, goToSlide]);

  const handleDotClick = useCallback(
    (index: number) => {
      setAutoplay(false);
      goToSlide(index);
    },
    [goToSlide],
  );

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (autoplay && !isTransitioning) {
      interval = setInterval(() => goToNext(), 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, isTransitioning, goToNext]);

  useEffect(() => {
    if (!autoplay) {
      const timer = setTimeout(() => setAutoplay(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [autoplay]);

  function SlideControls() {
    return (
      <div className="hidden lg:flex justify-between w-full absolute left-0 top-1/2 px-4 lg:px-12 transform -translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="z-20 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer"
          aria-label="Previus testimonial"
          disabled={isTransitioning}
        >
          <svg
            width="18"
            height="32"
            viewBox="0 0 18 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.341 0.90901C18.2197 1.78769 18.2197 3.21231 17.341 4.09099L5.43198 16L17.341 27.909C18.2197 28.7877 18.2197 30.2123 17.341 31.091C16.4623 31.9697 15.0377 31.9697 14.159 31.091L0.65901 17.591C-0.21967 16.7123 -0.21967 15.2877 0.65901 14.409L14.159 0.90901C15.0377 0.0303301 16.4623 0.0303301 17.341 0.90901Z"
              fill="white"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="z-20 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer"
          aria-label="Next testimonial"
          disabled={isTransitioning}
        >
          <svg
            width="18"
            height="32"
            viewBox="0 0 18 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.65901 0.90901C1.53769 0.0303301 2.96231 0.0303301 3.84099 0.90901L17.341 14.409C18.2197 15.2877 18.2197 16.7123 17.341 17.591L3.84099 31.091C2.96231 31.9697 1.53769 31.9697 0.65901 31.091C-0.21967 30.2123 -0.21967 28.7877 0.65901 27.909L12.568 16L0.65901 4.09099C-0.21967 3.21231 -0.21967 1.78769 0.65901 0.90901Z"
              fill="#0F172A"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <section
      className="h-[700px] lg:h-fit flex flex-col items-center justify-center lg:flex-row gap-4 bg-yellow-strong relative"
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Depoimentos de usuários
      </h2>

      <div className="w-full lg:w-2/5 flex flex-col justify-center text-lg lg:text-2xl">
        <div
          aria-live="polite"
          className="transition-transform duration-500 ease-in-out flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <article key={index} className="w-full flex-shrink-0 px-4 lg:px-8">
              <blockquote className="w-[361px] lg:w-[528px] font-text lg:text-2xl">
                {testimonial.text}
              </blockquote>
              <div className="mt-5 mb-10 flex flex-col">
                <span>{testimonial.name},</span>
                <span className="font-bold">{testimonial.company}</span>
              </div>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentIndex === index
                        ? "bg-dark-blue !w-8"
                        : "bg-white hover:bg-gray-300"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[375px] lg:w-1/2">
        <img
          role="presentation"
          src={balloonElement}
          alt=""
          width={45}
          height={45}
          loading="lazy"
          aria-hidden="true"
          className="absolute -top-15 lg:-top-15 right-10 lg:right-38 z-20"
        />
        <div className="w-[320px] md:w-[361px] lg:w-[528px] h-[294px] lg:h-[415px] absolute p-1 bottom-5 lg:-bottom-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-20 rounded-2xl bg-dark-blue z-10 overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out flex h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full h-full px-1 flex-shrink-0">
                <figure className="w-[301px] lg:w-[510px] h-full overflow-hidden rounded-xl">
                  <img
                    src={testimonial.image}
                    alt={`Image of ${testimonial.name} from ${testimonial.company}`}
                    width={528}
                    height={415}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div
          role="presentation"
          className={`absolute -bottom-10 lg:-bottom-40 right-8 lg:right-28 w-[325px] lg:w-[455px] h-[375px] lg:h-[573px] rounded-[50px] transform ${
            isTransitioning
              ? "transition-transform duration-500 -rotate-[40deg]"
              : "transition-transform duration-700 -rotate-30"
          } bg-dark-blue z-0`}
          aria-hidden="true"
        ></div>
        <img
          role="presentation"
          src={cubesElement}
          alt=""
          aria-hidden="true"
          width={155}
          height={155}
          loading="lazy"
          className="absolute -bottom-20 left-15 lg:left-28 z-10"
        />
      </div>
      <SlideControls />
    </section>
  );
}
