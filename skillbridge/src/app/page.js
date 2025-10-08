import HeroSection from '../../components/HeroSection';
import WhySection from '../../components/WhySection';
import LearningPathSection from '../../components/LearningPathSection';
import TestimonialSection from '../../components/TestimonialSection';
import CTASection from '../../components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhySection />
      <LearningPathSection />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}