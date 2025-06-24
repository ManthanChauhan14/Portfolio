import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Manthan Chauhan</p>
            <p className="subtext">
              Detail-oriented MERN Stack Developer with practical experience in
              building full-stack web applications using React, Node.js,
              Express, and MongoDB. Adept at developing scalable, responsive
              interfaces and RESTful APIs with a focus on performance, code
              quality, and user experience.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-black-color grid-2">
          <div className="z-10 w-[80%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Ghaziabad, and open to work remotely as well as physically.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 3 */}
         <div className="grid-special-color grid-3">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Directly reach out to me.
            </p>
            <CopyEmailButton />
          </div>
        </div>
        
         {/* Grid 4 */}
       
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText mb-5 text-xl">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default About;
