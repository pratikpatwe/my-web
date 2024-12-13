import { cn } from '@/lib/utils';

export const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Recent Launches', href: '#recent-launches' },
  { name: 'Current Work', href: '#current-work' },
  { name: 'Featured Projects', href: '#featured-projects' },
  { name: 'Get in Touch', href: '#contact' },
];

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export function Navigation({ className, onItemClick }: NavigationProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-center gap-4 md:gap-8", className)}>
      {navigationItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={onItemClick}
          className="group relative text-sm font-medium transition-all duration-300"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
            {item.name}
          </span>
          <span className="absolute inset-x-0 -bottom-1 h-px w-full bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-purple-500/0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-300" />
          <span className="absolute inset-0 rounded-lg -z-10 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </a>
      ))}
    </div>
  );
}