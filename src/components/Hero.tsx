import { ArrowRight, Github, Code2, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-6">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Pratik Patwe
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl">
                  a Developer and Tech Enthusiast
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
                Full-stack developer specializing in building exceptional digital experiences.
                I focus on creating scalable, performant applications with clean code
                and intuitive user interfaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base" asChild>
                <a href="#recent-launches">
                  Explore Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a
                  href="https://github.com/pratikpatwe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Profile
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Code2 className="h-6 w-6 text-primary" />
                <span className="text-base">Clean Code</span>
              </div>
              <div className="flex items-center gap-3">
                <Laptop className="h-6 w-6 text-primary" />
                <span className="text-base">Modern Tech Stack</span>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20 animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background aspect-video lg:aspect-square">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://your-intro-video-url.mp4" type="video/mp4" />
              </video>
              {/* Fallback image with better quality and proper aspect ratio */}
              <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1200&h=1200&fit=crop"
                alt="Pratik Patwe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}