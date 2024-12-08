import React, { useEffect, useRef } from 'react';
import { Code2, Terminal } from 'lucide-react';
import { MatrixRain } from './MatrixRain';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    title.setAttribute('data-text', title.textContent || '');
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0f1419]">
      <MatrixRain />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-4 pt-16">
          <div className="text-center">
            <div className="mb-8 relative">
              <img src="https://raw.githubusercontent.com/pratikpatwe/my-web/refs/heads/main/src/images/p-img.png" alt="Profile Image" className="w-20 h-20 mx-auto mb-6 hover-glow p-2" />
            </div>
            <h1 ref={titleRef} className="text-5xl font-bold text-white mb-6 glitch">
              Hi, I'm <span className="text-[#64ffda]">Pratik</span>
            </h1>
            <div className="typing-container overflow-hidden">
              <div className="flex items-center justify-center space-x-2 mb-6 typing">
                <div className="hidden md:block">
                  <Code2 className="text-[#64ffda]" size={20} />
                </div>
                <p className="text-xl text-gray-300">
                  Full Stack Developer & Tech Innovator
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Building the future through code. Specializing in scalable architecture,
              innovative solutions, and cutting-edge technologies.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="px-6 py-2 border border-[#64ffda] text-[#64ffda] hover-glow"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-[#64ffda] text-[#0f1419] hover:bg-[#64ffda]/90 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}