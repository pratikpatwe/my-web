import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/pratik/ecommerce',
    live: 'https://ecommerce-demo.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/pratik/taskmanager',
    live: 'https://task-manager-demo.com'
  },
  {
    title: 'AI Chat Interface',
    description: 'Modern chat interface with AI-powered responses.',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'OpenAI API', 'Firebase'],
    github: 'https://github.com/pratik/aichat',
    live: 'https://ai-chat-demo.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-12 text-white">Featured Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm text-gray-400">
                      {tech}{i < project.tech.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-[#00f3ff]"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-400 hover:text-[#00f3ff]"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}