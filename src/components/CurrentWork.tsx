import React from 'react';
import { Code, GitBranch, Clock } from 'lucide-react';

const currentProjects = [
  {
    name: 'AI Code Assistant',
    description: 'Building an intelligent coding assistant powered by advanced language models',
    progress: 75,
    tech: ['Python', 'TensorFlow', 'GPT-4'],
    timeline: 'Q2 2024'
  },
  {
    name: 'Quantum Computing SDK',
    description: 'Developing tools for quantum computing simulation and algorithm testing',
    progress: 45,
    tech: ['Rust', 'WebAssembly', 'TypeScript'],
    timeline: 'Q3 2024'
  }
];

export function CurrentWork() {
  return (
    <section id="current-work" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 mb-12">
          <Clock className="text-[#00f3ff]" size={24} />
          <h2 className="text-2xl font-bold text-white">Current Work</h2>
        </div>
        <div className="space-y-8">
          {currentProjects.map((project, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg neon-border">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-medium text-white mb-2 md:mb-0">{project.name}</h3>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-gray-400">{project.timeline}</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-[#00f3ff]">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-[#00f3ff] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#2a2a2a] text-gray-300 rounded text-sm flex items-center"
                  >
                    <Code size={12} className="mr-1" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}