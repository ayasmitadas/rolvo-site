import SubNav from "@/components/SubNav";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import Differentiation from "@/components/sections/Differentiation";
import ProductTour from "@/components/sections/ProductTour";
import HowItWorks from "@/components/sections/HowItWorks";
import SpecialistRoster from "@/components/sections/SpecialistRoster";
import Skills from "@/components/sections/Skills";
import Features from "@/components/sections/Features";
import ProductProof from "@/components/sections/ProductProof";
import UseCase from "@/components/sections/UseCase";
import Trust from "@/components/sections/Trust";
import Selectiva from "@/components/sections/Selectiva";
import Pricing from "@/components/sections/Pricing";

// Playbooks and Marketplace are built but deliberately not rendered —
// both capabilities are deferred, and Skills supersedes the marketplace.
// See src/components/sections/Playbooks.tsx and Marketplace.tsx.

export default function Home() {
  return (
    <>
      <SubNav />
      <main className="flex-1">
        <Hero />
        <Differentiation />
        <ProductTour />
        <HowItWorks />
        <SpecialistRoster />
        <Skills />
        <Features />
        <ProductProof />
        <UseCase />
        <Trust />
        <Selectiva />
        <Pricing />
      </main>
      <SiteFooter />
    </>
  );
}
