import Cube from "../components/animations/cube";
import Cube2 from "../components/animations/cube2";
import GuideLines from "./section/guidelines";
import { useScrollZoom } from "../hooks/useScrollZoom";
import GridGenerator from "./section/grid-generator";
import Contact from "./section/Contact";

const Home = () => {
  const containerRef = useScrollZoom(1, 1.4);

  return (
    <>
      <div
        id="home"
        ref={containerRef}
        className="min-h-screen relative flex flex-col items-center justify-center bg-grid overflow-hidden"
      >
        <div className="absolute animate-pulse hidden md:block text-[1020px] -top-[350px] -left-60 font-extrabold text-brand-secondary/20 z-1">
          G
        </div>
        <div className="min-h-screen flex flex-col justify-center md:flex-row w-[90%] mx-0 mu-auto h-full">
          <div className="relative w-full lg:w-full md:min-h-screen flex flex-col justify-center p-6">
            <div className="text-brand-contrast text-4xl md:text-7xl font-semibold capitalize">
              Start building your{" "}
              <span className="text-brand-primary">perfect grid</span> now and{" "}
              <span className="text-brand-secondary">
                streamline your workflow!
              </span>
            </div>
            <div className="text-brand-contrast text-sm md:text-lg max-w-4/5 text-left mt-4">
              Create pixel-perfect grids effortlessly with our intuitive grid
              generator. Whether you're working with CSS, Tailwind CSS, or any
              other library, our tool helps you build responsive layouts in
              seconds.
            </div>
          </div>
          <div className="relative w-[40%] hidden lg:flex lg:items-center lg:justify-center sm:mt-6">
            <div className="absolute top-20 left-0">
              <Cube />
            </div>
            <div className="absolute top-[300px] left-0">
              <Cube2 />
            </div>
          </div>
        </div>
        <a
          className="absolute bottom-30 px-6 py-3 shadow-md bg-brand-primary rounded-full font-semibold hover:bg-brand-primary/80 transition-colors"
          href="#grid-generator"
        >
          Let's Built it
        </a>
      </div>
      <GuideLines />
      <GridGenerator />
      <Contact />
    </>
  );
};
export default Home;
