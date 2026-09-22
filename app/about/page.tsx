
import ImageText from "@/components/image-with-text";
import DemoSection from "@/components/demo";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import FourColumn from "@/components/FourColumn";
import Teams from "@/components/teams";
import AboutBanner from "@/components/AboutBannerAnimation";

export default async function AboutPage() {


  return (
    <>
      <section className="about-section"> 
    
<AboutBanner />
      </section>
      <ImageText />
            <Teams />
      <StatsCounter />
      <FourColumn />

      <DemoSection />
    </>
  );
}
