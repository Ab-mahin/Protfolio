import { OrbitingCircles } from "./OrbitingCircles";
import * as images from "../../assets";

export function Frameworks() {
  const skills = [
  "azure",
  "cplusplus",
  "javascriptSvg",
  "css3",
  "docker",
  "gitSvg",
  "html5",
  "reactjs",
  "sqlite",
  "csharp",
  "vscode",
  "py",
  "dotnetPink",
];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={images[skill]} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={images[skill]} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
