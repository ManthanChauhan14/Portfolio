import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "html5",
    "css3",
    "javascript",
    "Node.js",
    "Express.js",
    "React",
    "Redux",
    "git",
    "JWT",
    "mongoDb",
    "tailwindcss",
    "Gsap",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <p key={index}  >
            {skill}
          </p>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <p key={index}  >
            {skill}
          </p>
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
