import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const projects = [
  {
    name: 'Delta Platform',
    startDate: 'February 2024',
    description: 'AI-powered content management system',
    progress: 75,
    techStack: ['Next.js', 'OpenAI', 'Prisma'],
  },
  {
    name: 'Epsilon Mobile',
    startDate: 'March 2024',
    description: 'Cross-platform mobile app for task management',
    progress: 45,
    techStack: ['React Native', 'Redux', 'Node.js'],
  },
  {
    name: 'Zeta Analytics',
    startDate: 'March 2024',
    description: 'Real-time data visualization dashboard',
    progress: 30,
    techStack: ['Vue 3', 'D3.js', 'FastAPI'],
  },
];

export function CurrentWork() {
  return (
    <section id="current-work" className="pt-20">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Current Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Here's what I'm currently working on. These projects are in active
            development and represent my latest endeavors.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-xl">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Started {project.startDate}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}