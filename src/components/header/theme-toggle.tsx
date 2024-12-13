import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        "relative group",
        "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20 before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}
    >
      <div className="relative w-5 h-5">
        <span 
          className={cn(
            "absolute inset-0 transform transition-all duration-500",
            theme === 'dark' ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          )}
        >
          <Moon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </span>
        <span 
          className={cn(
            "absolute inset-0 transform transition-all duration-500",
            theme === 'dark' ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          )}
        >
          <Sun className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </span>
      </div>
    </Button>
  );
}