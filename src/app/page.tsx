import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GallerySection } from "@/components/GallerySection";
import { ProductProcessingSection } from "@/components/ProductProcessingSection";
import { ProductsSection } from "@/components/ProductsSection";
import { CtaBanner } from "@/components/CtaBanner";
import { TeamSection } from "@/components/TeamSection";
import { ContactFooterSection } from "@/components/ContactFooterSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <GallerySection />
        <ProductProcessingSection />
        <ProductsSection />
        <CtaBanner />
        <TeamSection />
        <ContactFooterSection />
      </main>
      <WhatsAppButton />
    </>
  );
}
