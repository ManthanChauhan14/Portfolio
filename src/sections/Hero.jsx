import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      id="home"
      className="flex  items-center gap-[10%] justify-center min-h-screen overflow-hidden  "
    >
      <HeroText />
      <ParallaxBackground />
      <img
        src="/models/profile.jpg"
        alt="Profile"
        className=" mt-[10%] h-[500px] w-[400px] object-cover rounded-full animate-bubble shadow-lg border-4 border-purple-500"
      />
    </section>
  );
};


export default Hero;
