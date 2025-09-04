import { Frameworks } from "../components/Frameworks";
import { Globe } from "../components/globe";

const About = () => {
  return (
    <div>
      <section className="c-space section-spacing" id="About">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          {/* Grid 1 (buat kotaknya) */}
          <div className="flex items-end grid-default-color grid-1">
            <img src="assets/profil.jpg"
            className="absolute items-center max-md:-left-[1rem] max-md:scale-[2]
            -top-[2rem] md:scale-[4] md:right-40  lg:scale-[2]"
            /> 
          </div>
          {/* Grid 2 */}
          <div className="grid-default-color grid-2">
            <div className="z-10">
              <p className="headtext ">Hi, I'm Aditya Wardana</p>
              <p className="subtext ">I am a Bachelor of Information Engineering graduate with a strong commitment to delivering excellent user experiences and captivating web designs. Proficient in front-end development, I thrive on challenges and possess a curious mindset. I enjoy collaborating within teams and continually seek to acquire new technologies and tools to remain relevant in the constantly evolving web landscape.</p>
            </div>
          </div>
          {/* Grid 3 */}
          <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
              <p className="headtext">Based</p>
              <p className="subtext">in Depok, Indonesia.</p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe/>
            </figure>
          </div>
          {/* Grid 4 */}
          <div className="grid-default-color grid-4">
            <div className="absolute z-10 w-[50%] inset-y-0 right-50 top-17 max-md:-right-1 max-md:top-3 max-md:scale-80">
              <p className="headtext ">My Skills</p>
              <p className="subtext">I am familiar with various tools in website development, including frontend 
                technologies such as ReactJS, HTML, CSS, JavaScript, and Tailwind CSS, as well as backend development using Java and PHP. 
                Database management with MySQL. Additionally, I have experience in UI design using Figma.</p>
          </div>
            <div className="absolute right-100 lg:right-130 top-0 w-full h-full md:scale-100 max-md:scale-[1] max-md:-left-[10rem]">
             <Frameworks/>
            </div>  
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
