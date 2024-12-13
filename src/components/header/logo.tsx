import { Code2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Logo() {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="relative">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-all duration-500" />
        <div className="relative">
          <Avatar className="h-10 w-10 ring-2 ring-background transition-all duration-500 group-hover:scale-110">
            <AvatarImage 
              src="https://github.com/pratikpatwe.png" 
              alt="Pratik Patwe"
              className="group-hover:brightness-110 transition-all duration-500"
            />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500">
              <Code2 className="h-5 w-5 text-white" />
            </AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>
      </div>
      <a
        href="#"
        className="relative text-xl font-bold tracking-tight transition-all duration-300"
      >
        <span className="relative z-10 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-200 text-transparent bg-clip-text group-hover:opacity-0 transition-opacity duration-300">
          Pratik Patwe
        </span>
        <span className="absolute inset-0 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Pratik Patwe
        </span>
      </a>
    </div>
  );
}