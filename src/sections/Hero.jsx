import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackgorund";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-[10%] min-h-screen overflow-hidden px-4 md:px-16 py-10"
    >
      <HeroText />

      {/* Profile Image */}
      <img
        src="/models/profile.jpg"
        alt="Profile"
        className="h-60 w-60 md:h-[500px] md:w-[400px] object-cover rounded-full animate-bubble shadow-lg border-4 border-purple-500 mt-10 md:mt-[10%]"
      />

      <ParallaxBackground />
    </section>
  );
};

export default Hero;
