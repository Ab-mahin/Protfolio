import { useRef } from "react";
import { coding, py, cplusplus, csharp, dotnetPink, pic3, pic1 } from "../assets";
import Card from "../card/card";
import { CopyEmailButton, Frameworks } from "./canvas";
import { CustomeGlobe } from "./canvas/CustomeGlobe";

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section className="c-space section-spacing" id="about">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-heading text-gray-800 mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {/* Profile + Intro Card */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Hi, I'm Ab Mahin</h3>
                <p className="text-gray-600">Software Developer & Problem Solver</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Over the last 4 years, I've dedicated myself to mastering Data Structures & Algorithms. 
              Through this journey, I've learned countless techniques and continuously improved my 
              problem-solving skills. I'm passionate about creating efficient, scalable solutions 
              and always eager to take on new challenges.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Problem Solving</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Algorithms</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Data Structures</span>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full -translate-y-10 translate-x-10"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Location</h3>
            </div>
            
            <p className="text-gray-600 mb-4">
              Based in Bangladesh, open to remote work worldwide
            </p>
            
            <div className="relative h-32">
              <CustomeGlobe />
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full -translate-y-12 translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Tech Stack</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
            </p>
            
            <div className="relative h-40">
              <Frameworks />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-600 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-200 mb-6">
              Let's collaborate and bring your ideas to life with innovative solutions.
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Logic & Principles */}
        <div className="lg:col-span-3 bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Development Philosophy</h3>
              <p className="text-gray-600">Logic is the foundation of great software</p>
            </div>
            
            <div
              ref={grid2Container}
              className="flex items-center justify-center w-full h-64 relative"
            >
              <div className="text-center">
                <h4 className="text-4xl font-bold text-gray-800 mb-4">LOGIC IS POWER</h4>
                <p className="text-gray-600">Clean code, solid principles, and elegant solutions</p>
              </div>

              {/* Floating Cards */}
              <Card
                containerRef={grid2Container}
                style={{ rotate: "75deg", top: "20%", left: "15%" }}
                text="GRASP"
              />
              <Card
                containerRef={grid2Container}
                style={{ rotate: "-30deg", top: "60%", left: "40%" }}
                text="SOLID"
              />
              <Card
                containerRef={grid2Container}
                style={{ rotate: "90deg", bottom: "20%", left: "75%" }}
                text="Design Patterns"
              />
              <Card
                containerRef={grid2Container}
                style={{ rotate: "-45deg", top: "50%", left: "5%" }}
                text="Design Principles"
              />
              <Card
                containerRef={grid2Container}
                style={{ rotate: "20deg", top: "15%", left: "35%" }}
                text="CP"
              />

              <Card
                containerRef={grid2Container}
                style={{ rotate: "30deg", top: "75%", left: "75%" }}
                image={py}
              />
              <Card
                containerRef={grid2Container}
                style={{ rotate: "-45deg", top: "75%", left: "20%" }}
                image={cplusplus}
              />
              <Card
                containerRef={grid2Container}
                style={{ rotate: "-45deg", top: "10%", left: "5%" }}
                image={csharp}
              />
              <Card
                containerRef={grid2Container}
                style={{ rotate: "20deg", top: "15%", left: "70%" }}
                image={dotnetPink}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
