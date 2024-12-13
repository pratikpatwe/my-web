import { Code2, Database, Globe2, Laptop, Palette, Terminal } from 'lucide-react';
import { Card } from '@/components/ui/card';

const skills = [
  {
    icon: <Code2 className="h-6 w-6" />,
    name: 'Frontend Development',
    description: 'React, Vue, TypeScript, Tailwind CSS',
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    name: 'Backend Development',
    description: 'Node.js, Python, Go, REST APIs',
  },
  {
    icon: <Database className="h-6 w-6" />,
    name: 'Database Design',
    description: 'PostgreSQL, MongoDB, Redis',
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    name: 'Cloud Services',
    description: 'AWS, Google Cloud, Azure',
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    name: 'DevOps',
    description: 'Docker, Kubernetes, CI/CD',
  },
  {
    icon: <Palette className="h-6 w-6" />,
    name: 'UI/UX Design',
    description: 'Figma, Adobe XD, Prototyping',
  },
];

export function About() {
  return (
    <section id="about" className="pt-20">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            I'm a passionate full-stack developer with over 5 years of experience
            in building web applications. I love turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary">
                  {skill.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}