import SubNav from "@/components/SubNav";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import Differentiation from "@/components/sections/Differentiation";
import HowItWorks from "@/components/sections/HowItWorks";
import SpecialistRoster from "@/components/sections/SpecialistRoster";
import ProductProof from "@/components/sections/ProductProof";
import UseCase from "@/components/sections/UseCase";
import Playbooks from "@/components/sections/Playbooks";
import Marketplace from "@/components/sections/Marketplace";
import Trust from "@/components/sections/Trust";
import Selectiva from "@/components/sections/Selectiva";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <SubNav />
      <main className="flex-1">
        <Hero />
        <Differentiation />
        <HowItWorks />
        <SpecialistRoster />
        <ProductProof />
        <UseCase />
        <Playbooks />
        <Marketplace />
        <Trust />
        <Selectiva />
        <Pricing />
      </main>
      <SiteFooter />
    </>
  );
}
