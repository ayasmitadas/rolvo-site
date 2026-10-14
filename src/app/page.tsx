import SubNav from "@/components/SubNav";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import DeliveryMotion from "@/components/sections/DeliveryMotion";
import Differentiation from "@/components/sections/Differentiation";
import Pipeline from "@/components/sections/Pipeline";
import Specialists from "@/components/sections/Specialists";
import Workspace from "@/components/sections/Workspace";
import Governance from "@/components/sections/Governance";
import Pricing from "@/components/sections/Pricing";
import FinalCta from "@/components/sections/FinalCta";

// Content follows rolvo-3.vercel.app, which is the source of truth for
// copy. Dark and light bands alternate as in Figma frame 1:3 — a section
// renders dark by carrying `on-dark` (see globals.css).

export default function Home() {
  return (
    <>
      <SubNav />
      <main className="flex-1">
        <Hero />            {/* dark  */}
        <DeliveryMotion />  {/* light */}
        <Differentiation /> {/* light */}
        <Pipeline />        {/* dark  */}
        <Specialists />     {/* light */}
        <Workspace />       {/* light */}
        <Governance />      {/* dark  */}
        <Pricing />         {/* light */}
        <FinalCta />        {/* dark  */}
      </main>
      <SiteFooter />
    </>
  );
}
