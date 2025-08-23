import { Hero } from '@/components/sections/hero';
import { Problems } from '@/components/sections/problems-variations';
import { Solutions } from '@/components/sections/solutions';
import { HowItWorks } from '@/components/sections/how-it-works';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { Audience } from '@/components/sections/audience';
import { FinalCTA } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problems />
      <Solutions />
      <HowItWorks />
      <ProductShowcase />
      <Audience />
      <FinalCTA />
    </main>
  );
}
