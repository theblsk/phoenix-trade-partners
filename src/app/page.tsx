import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutValues from "./components/AboutValues";
import Contact from "./components/Contact";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <Header />
      <Hero />
      <Services />
      <AboutValues />
      <Contact />
      <SiteFooter />
    </div>
  );
}
