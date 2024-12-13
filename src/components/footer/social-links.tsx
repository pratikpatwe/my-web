import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/pratikpatwe',
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/pratikpatwe',
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/pratikpatwe',
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: 'Email',
    href: 'mailto:pratik.patwe@example.com',
    icon: <Mail className="h-5 w-5" />,
  },
];

export function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {socialLinks.map((item) => (
        <Button
          key={item.name}
          variant="ghost"
          className="justify-start w-full"
          asChild
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}