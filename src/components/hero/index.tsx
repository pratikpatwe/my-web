import { HeroContent } from './hero-content';
import { ProfileMedia } from './profile-media';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-6">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <HeroContent />
          <ProfileMedia />
        </div>
      </div>
    </section>
  );
}