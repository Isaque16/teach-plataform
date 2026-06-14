import Hero from "./sections/hero";
import About from "./sections/about";
import TestimonialsSlide from "./sections/testimonials-slide";
import Explore from "./sections/explore";
import Statics from "./sections/statics";
import TestimonialsCards from "./sections/testimonials-cards";
import Features from "./sections/features";
import JoinCta from "./sections/join-cta";
import RequestCta from "./sections/request-cta";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <TestimonialsSlide />
        <Explore />
        <Statics />
        <TestimonialsCards />
        <Features />
        <JoinCta />
        <RequestCta />
      </main>
    </>
  );
}
