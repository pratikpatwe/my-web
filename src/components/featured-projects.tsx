import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    name: 'Project Omega',
    shortDescription: 'Enterprise-grade CMS with AI capabilities',
    fullDescription:
      'A comprehensive content management system that leverages AI for content optimization, automated tagging, and smart content recommendations. Built with scalability and performance in mind.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=630',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'OpenAI'],
    features: [
      'AI-powered content optimization',
      'Real-time collaboration',
      'Advanced analytics',
      'Custom workflow builder',
      'Multi-language support',
    ],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    name: 'CloudScale',
    shortDescription: 'Cloud infrastructure management platform',
    fullDescription:
      'A modern platform for managing cloud infrastructure across multiple providers. Features include cost optimization, automated scaling, and comprehensive monitoring capabilities.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=630',
    techStack: ['Vue.js', 'Go', 'MongoDB', 'Docker', 'Kubernetes'],
    features: [
      'Multi-cloud support',
      'Cost optimization',
      'Automated scaling',
      'Security compliance',
      'Performance monitoring',
    ],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    name: 'DataViz Pro',
    shortDescription: 'Advanced data visualization toolkit',
    fullDescription:
      'A powerful data visualization toolkit that makes it easy to create interactive charts, graphs, and dashboards. Supports real-time data streaming and custom visualization components.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=630',
    techStack: ['React', 'D3.js', 'TypeScript', 'WebGL', 'Socket.io'],
    features: [
      'Interactive visualizations',
      'Real-time data streaming',
      'Custom components',
      'Export capabilities',
      'Responsive design',
    ],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="pt-20">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            A selection of my best work, showcasing the depth and breadth of my
            technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-video rounded-lg object-cover"
                />
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">View Details</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{project.name}</DialogTitle>
                        <DialogDescription>
                          {project.fullDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold mb-2">Key Features</h4>
                          <ul className="list-disc pl-4 space-y-1">
                            {project.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-4">
                          <Button asChild>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Globe className="mr-2 h-4 w-4" />
                              Visit Site
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button asChild>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}