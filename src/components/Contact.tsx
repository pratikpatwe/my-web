import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Clock,
  Calendar,
} from 'lucide-react';

const socialLinks = [
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

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Message sent successfully!');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="pt-20">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Let's collaborate on your next project! I'm always open to discussing
            new opportunities and innovative ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Enter your message"
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Mumbai, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Availability</h3>
                    <p className="text-sm text-muted-foreground">
                      Open to freelance and full-time opportunities
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}