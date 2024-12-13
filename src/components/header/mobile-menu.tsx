import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigation } from './navigation';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="relative group"
      >
        <div className="relative w-5 h-5">
          <span className={cn(
            "absolute inset-0 transition-all duration-500",
            isOpen ? "rotate-[135deg]" : "rotate-0"
          )}>
            <Menu className={cn(
              "h-5 w-5 transition-opacity duration-300",
              isOpen ? "opacity-0" : "opacity-100"
            )} />
            <X className={cn(
              "h-5 w-5 absolute inset-0 transition-opacity duration-300",
              isOpen ? "opacity-100" : "opacity-0"
            )} />
          </span>
        </div>
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>

      {/* Mobile Navigation Overlay */}
      <div className={cn(
        "fixed inset-x-0 top-16 bg-background/80 backdrop-blur-xl border-b border-border/50",
        "transition-all duration-500 transform",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        <div className="container mx-auto p-6 space-y-8">
          <Navigation 
            className="px-2" 
            onItemClick={onToggle}
          />
          <div className="border-t border-border/50 pt-6 px-2">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">
                Switch to {theme === 'dark' ? 'light' : 'dark'} mode
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}