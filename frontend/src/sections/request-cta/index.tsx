import Heading from "./Heading.tsx";
import Form from "./Form.tsx";

export default function RequestCta() {
  return (
    <section
      id="request-cta-section"
      className="flex flex-col justify-center items-center bg-orange-strong text-white"
      aria-labelledby="request-cta-heading"
    >
      <Heading />
      <Form />
    </section>
  );
}
