import Button from "../../components/common/Button";
import heroImage from "../../assets/hero/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <img
        src={heroImage}
        alt="Safarnest Holidays"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl">

          {/* Badge */}
          <span className="inline-flex items-center bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold shadow-lg">
            ✈ Trusted by Thousands of Travelers
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Explore The World
            <br />
            <span className="text-yellow-400">
              Beyond Expectations
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl leading-9 text-gray-200 max-w-2xl">
            Discover handcrafted holiday experiences across India and
            international destinations with premium hotels, seamless travel,
            transparent pricing and 24×7 customer support.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <Button text="Explore Packages" />

            <Button
              text="Get Free Quote"
              secondary
            />

          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                10K+
              </h3>

              <p className="mt-2 text-gray-300">
                Happy Travelers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                500+
              </h3>

              <p className="mt-2 text-gray-300">
                Holiday Packages
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                100+
              </h3>

              <p className="mt-2 text-gray-300">
                Destinations
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

        <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center">

          <div className="w-2 h-3 bg-white rounded-full mt-2"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;