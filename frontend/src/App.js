import "@/App.css";
import Hero from "@/components/landing/Hero";
import Credibility from "@/components/landing/Credibility";
import WhyFit from "@/components/landing/WhyFit";
import Problem from "@/components/landing/Problem";
import Advantage from "@/components/landing/Advantage";
import Program from "@/components/landing/Program";
import Evidence from "@/components/landing/Evidence";
import Testimonials from "@/components/landing/Testimonials";
import Director from "@/components/landing/Director";
import Leadership from "@/components/landing/Leadership";
import Network from "@/components/landing/Network";
import Accountability from "@/components/landing/Accountability";
import Ask from "@/components/landing/Ask";
import Beyond from "@/components/landing/Beyond";
import FinalCta from "@/components/landing/FinalCta";
import SiteFooter from "@/components/landing/SiteFooter";

export default function App() {
  return (
    <div className="page">
      <main>
        <Hero />
        <Credibility />
        <WhyFit />
        <Problem />
        <Advantage />
        <Program />
        <Evidence />
        <Testimonials />
        <Director />
        <Leadership />
        <Network />
        <Accountability />
        <Ask />
        <Beyond />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
