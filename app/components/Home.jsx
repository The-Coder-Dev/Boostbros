'use client'
import Aurora from "./Aurora";


const Home = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-primary">
      {/* Aurora background */}
      <Aurora
        colorStops={["#FF4925", "#FF4925", "#FF4925"]}
        amplitude={0.5}
        speed={0.7}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-10 ">
        <div className="w-full h-1/2 flex items-start pt-40 md:pt-30 justify-center px-7">
          <p className="text-white text-center text-sm md:text-base text-shadow-md max-w-lg">
            Two bros, one mission helping your brand stand out. With
            design flair and coding smarts, we boost what matters.
          </p>
        </div>

        <div className="w-full h-1/2 pb-10 md:pb-0 flex items-end justify-center">
          <h1 className="text-white text-[13vw] leading-none md:text-[12vw] md:leading-50 font-black uppercase">
            BoostBros
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
