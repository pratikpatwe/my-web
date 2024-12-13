import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { RecentLaunches } from '@/components/recent-launches';
import { CurrentWork } from '@/components/current-work';
import { FeaturedProjects } from '@/components/featured-projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex flex-col gap-24 pb-24">
          <Hero />
          <div className="container max-w-7xl mx-auto px-4 md:px-6 space-y-24">
            <About />
            <RecentLaunches />
            <CurrentWork />
            <FeaturedProjects />
            <Contact />
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;