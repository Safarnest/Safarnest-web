import Button from "../components/Button";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white pt-28 pb-36"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Explore The World
          <br />
          With Confidence
        </h1>

        <p className="mt-8 text-xl text-gray-200">
          Luxury Tours • Honeymoon Packages • Family Holidays • Corporate Travel
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <Button text="Explore Packages" />
          <Button text="Get Free Quote" secondary />
        </div>

      </div>
    </section>
  );
}

export default Hero;