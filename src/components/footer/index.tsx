import { Code2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SocialLinks } from './social-links';

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold tracking-tight">
                Pratik Patwe
              </span>
            </div>
            <p className="text-muted-foreground max-w-[500px]">
              Building exceptional digital experiences with clean code and
              innovative solutions. Let's create something amazing together.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pratik Patwe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}