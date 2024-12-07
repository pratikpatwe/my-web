import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Terminal, TwitterIcon } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img src="https://raw.githubusercontent.com/pratikpatwe/my-web/refs/heads/main/src/images/pratik.png" alt="Pratik Patwe" className="w-8 h-8" />
            <span className="text-xl font-medium text-white">Pratik</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-[#00f3ff] transition-colors">About</a>
              <a href="#launches" className="text-gray-300 hover:text-[#00f3ff] transition-colors">Launches</a>
              <a href="#current-work" className="text-gray-300 hover:text-[#00f3ff] transition-colors">Current Work</a>
              <a href="#projects" className="text-gray-300 hover:text-[#00f3ff] transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-[#00f3ff] transition-colors">Contact</a>
              <div className="flex space-x-4 ml-4">
                <a href="https://github.com/pratikpatwe/" className="text-gray-300 hover:text-[#00f3ff] transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/pratik-patwe-7741a0255" className="text-gray-300 hover:text-[#00f3ff] transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/PatwePrati11520" className="text-gray-300 hover:text-[#00f3ff] transition-colors">
                  <TwitterIcon size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a0a0a]">
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-[#00f3ff]">About</a>
            <a href="#launches" className="block px-3 py-2 text-gray-300 hover:text-[#00f3ff]">Launches</a>
            <a href="#current-work" className="block px-3 py-2 text-gray-300 hover:text-[#00f3ff]">Current Work</a>
            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-[#00f3ff]">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-[#00f3ff]">Contact</a>
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://github.com/pratikpatwe/" className="text-gray-300 hover:text-[#00f3ff]">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pratik-patwe-7741a0255" className="text-gray-300 hover:text-[#00f3ff]">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/PatwePrati11520" className="text-gray-300 hover:text-[#00f3ff]">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}