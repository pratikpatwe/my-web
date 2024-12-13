import { useState, useEffect } from 'react';
import { Navigation } from './navigation';
import { MobileMenu } from './mobile-menu';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        "border-b border-border/5",
        isScrolled ? [
          "bg-background/70 backdrop-blur-xl",
          "shadow-[0_2px_20px_rgba(0,0,0,0.03)]",
          "dark:shadow-[0_2px_20px_rgba(0,0,0,0.1)]",
        ] : "bg-transparent"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <nav className="container mx-auto px-4 relative">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Navigation />
            <div className="w-px h-6 bg-border/50" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <MobileMenu 
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </nav>
    </header>
  );
}