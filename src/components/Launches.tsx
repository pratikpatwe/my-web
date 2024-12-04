import React from 'react';
import { Rocket, ExternalLink, Calendar } from 'lucide-react';

const launches = [
  {
    date: '2024',
    title: 'TechFlow Pro',
    description: 'Developer productivity suite with AI-powered code analysis',
    link: 'https://techflow.pro',
    status: 'Coming Soon'
  },
  {
    date: '2023',
    title: 'DevMetrics',
    description: 'Real-time development team analytics platform',
    link: 'https://devmetrics.io',
    status: 'Live'
  },
  {
    date: '2023',
    title: 'CodeSync',
    description: 'Collaborative code editor with real-time pair programming',
    link: 'https://codesync.dev',
    status: 'Beta'
  }
];

export function Launches() {
  return (
    <section id="launches" className="py-20 tech-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 mb-12">
          <Rocket className="text-[#00f3ff]" size={24} />
          <h2 className="text-2xl font-bold text-white">Recent Launches</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {launches.map((launch, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg neon-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-400">{launch.date}</span>
                </div>
                <span className={`text-sm px-2 py-1 rounded ${
                  launch.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                  launch.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {launch.status}
                </span>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">{launch.title}</h3>
              <p className="text-gray-400 mb-4">{launch.description}</p>
              <a
                href={launch.link}
                className="inline-flex items-center text-[#00f3ff] hover:text-[#00f3ff]/80"
              >
                Visit Site <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}