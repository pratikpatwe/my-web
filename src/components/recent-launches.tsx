import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    name: 'Project Alpha',
    description: 'A modern e-commerce platform with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=450',
    launchDate: 'October 2023',
    status: 'Live',
    statusColor: 'bg-green-500',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    name: 'Beta Dashboard',
    description: 'Analytics dashboard with customizable widgets and real-time data',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450',
    launchDate: 'December 2023',
    status: 'Beta',
    statusColor: 'bg-yellow-500',
    techStack: ['Vue.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    name: 'Gamma App',
    description: 'Mobile-first social platform for creative professionals',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=450',
    launchDate: 'January 2024',
    status: 'Alpha',
    statusColor: 'bg-blue-500',
    techStack: ['React Native', 'Firebase', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export function RecentLaunches() {
  return (
    <section id="recent-launches" className="pt-20">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Recent Launches
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Check out my latest projects and their current status. Each project
            represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden">
              <div className="aspect-video relative">
                <div
                  className={`absolute top-2 right-2 ${project.statusColor} text-white text-xs font-medium px-2.5 py-0.5 rounded-full`}
                >
                  {project.status}
                </div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4 flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Visit
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}