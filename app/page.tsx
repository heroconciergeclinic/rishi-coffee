import { BottleSection } from "@/components/bottle-section";
import { Community } from "@/components/community";
import { Hero } from "@/components/hero";
import { Lineup } from "@/components/lineup";
import { Marquee } from "@/components/marquee";
import { Points } from "@/components/points";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Story } from "@/components/story";
import { TaglineBand } from "@/components/tagline-band";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Marquee />
        <BottleSection />
        <Points />
        <Story />
        <Lineup />
        <TaglineBand />
        <Community />
      </main>
      <SiteFooter />
    </div>
  );
}
