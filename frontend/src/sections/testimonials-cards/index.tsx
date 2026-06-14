import woman1 from "../../assets/images/testimonials-cards/woman1.webp";
import businessMan from "../../assets/images/testimonials-cards/business-man.webp";
import womanPink from "../../assets/images/testimonials-cards/woman-pink.webp";
import man1 from "../../assets/images/testimonials-cards/man1.webp";
import { useCallback, useState } from "react";
import TestimonialCard from "./TestimonialCard.tsx";

export default function TestimonialsCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsPerView = 3;

  const testimonials = [
    {
      text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      avatar: woman1,
      name: "Hellen Jummy",
      role: "Financial Counselor",
    },
    {
      text: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
      avatar: businessMan,
      name: "Ralph Edwards",
      role: "Math Teacher",
    },
    {
      text: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
      avatar: womanPink,
      name: "Hellena John",
      role: "Psychology Student",
    },
    {
      text: "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
      avatar: man1,
      name: "Bob Brown",
      role: "Bob Brown, Designer",
    },
  ];

  const slideLeft = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, testimonials.length - cardsPerView)
        : prevIndex - 1,
    );
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, testimonials.length, cardsPerView]);

  const slideRight = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - cardsPerView ? 0 : prevIndex + 1,
    );
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, testimonials.length, cardsPerView]);

  return (
    <section
      id="testimonials-cards-section"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex justify-between items-center mb-5 lg:mb-20">
        <h2
          id="testimonials-heading"
          className="font-title text-2xl lg:text-6xl"
        >
          What everyone says
        </h2>
        <div className="hidden gap-4 lg:flex">
          <button
            type="button"
            onClick={slideLeft}
            className="p-3 border-2 border-orange-strong rounded-full cursor-pointer"
            disabled={isTransitioning}
            aria-label="Previous testimonial"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M13.5 7.5H1H13.5ZM1 7.5L7 1.5L1 7.5ZM1 7.5L7 13.5L1 7.5Z"
                fill="#EA580C"
              />
              <path
                d="M1 7.5L7 13.5M13.5 7.5H1H13.5ZM1 7.5L7 1.5L1 7.5Z"
                stroke="#EA580C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={slideRight}
            className="p-3 border-2 border-orange-strong rounded-full cursor-pointer"
            disabled={isTransitioning}
            aria-label="Next testimonial"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 7.5H13.5H1ZM13.5 7.5L7.5 1.5L13.5 7.5ZM13.5 7.5L7.5 13.5L13.5 7.5Z"
                fill="#EA580C"
              />
              <path
                d="M13.5 7.5L7.5 13.5M1 7.5H13.5H1ZM13.5 7.5L7.5 1.5L13.5 7.5Z"
                stroke="#EA580C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="overflow-x-scroll lg:overflow-x-hidden h-[330px]"
        aria-live="polite"
        role="region"
        aria-roledescription="carousel"
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (412 + 20)}px)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 mx-2.5">
              <TestimonialCard
                text={testimonial.text}
                avatar={testimonial.avatar}
                name={testimonial.name}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
