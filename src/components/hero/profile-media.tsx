import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ProfileMediaProps {
  className?: string;
}

export function ProfileMedia({ className }: ProfileMediaProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={cn(
      "relative order-first lg:order-last group",
      "before:absolute before:-inset-4 before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20 before:blur-2xl before:rounded-[32px] before:transition-all before:duration-500 before:group-hover:blur-3xl before:group-hover:scale-105",
      "after:absolute after:-inset-4 after:bg-gradient-to-b after:from-blue-500/20 after:to-purple-500/20 after:blur-2xl after:rounded-[32px] after:transition-all after:duration-500 after:group-hover:blur-3xl after:group-hover:scale-105",
      className
    )}>
      <div className={cn(
        "relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10 bg-background aspect-video lg:aspect-square",
        "transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-primary/20",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/10 before:to-purple-500/10",
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
        
        {/* YouTube Video Embed */}
        <iframe 
          src="https://www.youtube-nocookie.com/embed/LXb3EKWsInQ?autoplay=1&mute=1&controls=0&loop=1&playlist=LXb3EKWsInQ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_100%)] transition-all duration-500" />
      </div>
    </div>
  );
}