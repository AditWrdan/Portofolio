import { OrbitingCircles } from "./OrbitingCircles";


export function Frameworks() {

  const skills = [
    "react","html","css","js","tc",
  ];
  const skills1 = [
    "java","MySQL","figma","github","php",
  ];
 
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={50}>
       {skills.map((skill) => (
          <Icon key={skill} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles 
      iconSize={50}
      radius={90}
      reverse
        speed={2}
      > {skills1.map((skill) => (
          <Icon key={skill} src={`assets/logos/${skill}.png`} />
        ))}</OrbitingCircles>
        
    </div>
  );
}

const Icon=({src}) => (
  <img src ={src} className="rounded-sm hover:scale-110 duration-200" />
);