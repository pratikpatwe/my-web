import { ArrowRight, Github, Code2, Laptop, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroContent() {
  return (
    <div className="space-y-10">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 animate-fade-in hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span className="text-sm font-medium">Available for new projects</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight animate-title">
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <span className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text hover:from-blue-400 hover:to-purple-400 transition-all duration-300">
              Pratik Patwe
            </span>
          </span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-muted-foreground mt-4 block">
            Developer & Tech Enthusiast
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] animate-fade-in [--animation-delay:200ms] hover:text-foreground transition-colors duration-300">
          Full-stack developer crafting exceptional digital experiences with
          <span className="text-foreground font-medium"> clean code</span> and
          <span className="text-foreground font-medium"> innovative solutions</span>.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 animate-fade-in [--animation-delay:400ms]">
        <Button 
          size="lg" 
          className={cn(
            "text-base relative group overflow-hidden",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500",
            "before:translate-y-full before:hover:translate-y-0 before:transition-transform before:duration-300",
            "hover:text-white hover:scale-105 transition-all duration-300"
          )}
          asChild
        >
          <a href="#recent-launches" className="relative">
            Explore Portfolio
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-base relative group hover:border-primary/50 hover:scale-105 transition-all duration-300"
          asChild
        >
          <a
            href="https://github.com/pratikpatwe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            GitHub Profile
          </a>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-muted-foreground animate-fade-in [--animation-delay:600ms]">
        <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <Code2 className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="text-base group-hover:text-foreground transition-colors duration-300">Clean Code</span>
        </div>
        <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <Laptop className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="text-base group-hover:text-foreground transition-colors duration-300">Modern Tech Stack</span>
        </div>
      </div>
    </div>
  );
}