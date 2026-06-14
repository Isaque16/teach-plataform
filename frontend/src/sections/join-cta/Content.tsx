export default function CtaContent() {
  return (
    <div className="w-full lg:w-[667px] my-10 lg:mx-10 flex flex-col justify-center items-center gap-10">
      <h2
        id="join-heading"
        className="font-title text-2xl lg:text-5xl text-nowrap"
      >
        Join a world of learning
      </h2>
      <p className="font-text text-lg text-center">
        Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
        elit et fringilla habitant ut facilisi.
      </p>
      <a
        href="/signup"
        className="py-3 px-10 rounded-lg bg-orange-strong hover:bg-orange-700 transition-colors duration-200 text-white text-xl font-semibold"
      >
        Sign Up Now
      </a>
    </div>
  );
}
